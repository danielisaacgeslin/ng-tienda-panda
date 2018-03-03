import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, Validators, ValidatorFn } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { tap, filter, take, takeUntil, map } from 'rxjs/operators';

import { environment as env } from '../../../../environments/environment';
import { Article } from '../../../models';
import { actions as idMapActions, reducer as idMapReducer } from '../../../state-mgmt/id-map';
import { actions as adminActions, reducer as adminReducer } from '../../../state-mgmt/admin';
import { actions as productActions, reducer as productReducer } from '../../../state-mgmt/product';

@Component({
  selector: 'tp-admin-tools-list',
  templateUrl: './admin-tools-list.component.html',
  styleUrls: ['./admin-tools-list.component.scss']
})
export class AdminToolsListComponent implements OnInit, OnDestroy {

  public MLIds: idMapReducer.IdMap = {};
  public formKeys: string[] = [];
  public formGroup: FormGroup = new FormGroup({ token: new FormControl('', [Validators.required]) });
  public hiddenCategory: { [key: string]: boolean } = {};
  public savingMLIds: boolean = false;
  public itemsData: { [key: string]: Article } = {};
  private readonly categoryName: string = 'adminList';
  private readonly idLength: number = 12;
  private readonly idPrefix: string = 'MLA';
  private token: string;
  private destroy$: Subject<void> = new Subject();

  constructor(private store: Store<idMapReducer.State>) { }

  public ngOnInit() {
    this.store.dispatch(new idMapActions.Fetch());
    this.store.select(adminReducer.getToken).pipe(
      take(1),
      tap(token => this.formGroup.controls.token.setValue(token))
    ).subscribe();
    this.formGroup.controls.token.valueChanges.pipe(
      takeUntil(this.destroy$),
      tap(value => this.store.dispatch(new adminActions.AddToken(value)))
    ).subscribe();
    this.store.select(idMapReducer.getIdMapState).pipe(
      filter(data => !!Object.keys(data).length),
      tap(ids => {
        this.MLIds = ids;
        this.formKeys = Object.keys(ids);
        this.fillItemsData(this.getCondensedMLIds());
        this.resetForm();
      })
    ).subscribe();
    this.store.select(adminReducer.getLoading).pipe(
      takeUntil(this.destroy$),
      tap(loading => {
        this.savingMLIds = loading.active;
      })
    ).subscribe();
    this.store.select(productReducer.getByCategory(this.categoryName)).pipe(
      takeUntil(this.destroy$),
      map(data => {
        const articleMap = {};
        data.forEach(item => articleMap[item.id] = item);
        return articleMap;
      }),
      tap(data => this.itemsData = data)
    ).subscribe();
  }

  public ngOnDestroy() {
    this.destroy$.next();
  }

  public getFieldNames(key: string): string[] {
    return Object.keys(this.formGroup.controls).filter(name => name.includes(key));
  }

  public onSubmit(): void {
    if (!this.formGroup.valid) return;

    const MLIds: any = {};
    for (const controlKey in this.formGroup.controls) {
      if (controlKey === 'token') continue;
      const key: string = controlKey.slice(0, controlKey.indexOf('-'));
      MLIds[key] = MLIds[key] || [];
      const value = this.generateId(this.formGroup.controls[controlKey].value);
      if (value) MLIds[key].push(value);
    }
    this.MLIds = MLIds;
    this.token = this.formGroup.controls.token.value;
    this.fillItemsData(this.getCondensedMLIds());
    this.resetForm();
    this.store.dispatch(new adminActions.SaveMLIds({ token: this.token, MLIds: this.MLIds }));
  }

  public toggleHiddenCategory(key: string): void {
    this.hiddenCategory[key] = !this.hiddenCategory[key];
  }

  public removeInput(key: string): void {
    this.formGroup.removeControl(key);
  }

  public addInputOfType(key: string): void {
    const keyData = this.getKeyData(key);
    this.formGroup.addControl(`${keyData.type}-${<any>keyData.number + 1}`, this.generateFormControl(''));
  }

  public isLastOfType(keyToCheck: string): boolean {
    const keyToCheckData = this.getKeyData(keyToCheck);
    const keys: string[] = Object.keys(this.formGroup.controls);
    const maxNumber: number = keys
      .filter(key => key.split('-')[0] === keyToCheckData.type)
      .map(key => Number(key.split('-')[1]))
      .reduce((prev, current) => prev > current ? prev : current, 0);

    return keyToCheckData.number === maxNumber;
  }

  public isLastRemainingOfGroup(keyToCheck: string): boolean {
    const keyToCheckData = this.getKeyData(keyToCheck);
    const keys: string[] = Object.keys(this.formGroup.controls);
    return keys.filter(key => key.split('-')[0] === keyToCheckData.type).length < 2;
  }

  public fetchItem(control: AbstractControl): void {
    if (!control.valid) return;
    this.fillItemsData([control.value]);
  }

  private getKeyData(key: string): { type: string; number: Number } {
    return { type: key.split('-')[0], number: Number(key.split('-')[1]) };
  }

  private generateId(input: string): string {
    let value = input || '';

    while (value.indexOf('-') !== -1) value = value.replace('-', '');
    const prefixIndex: number = value.indexOf(this.idPrefix);
    value = value.slice(prefixIndex, prefixIndex + this.idLength);
    const isValid: boolean =
      value.indexOf(this.idPrefix) !== -1 &&
      !isNaN(<any>value.slice(this.idPrefix.length, value.length)) &&
      value.length === this.idLength;
    return isValid && value;
  }

  private resetForm(): void {
    const controls: { [key: string]: AbstractControl } = {};
    for (const key in this.MLIds) {
      this.MLIds[key].forEach((id: string, index: number) => {
        controls[`${key}-${index}`] = this.generateFormControl(id);
      });
    }
    controls.token = this.formGroup.controls.token;
    this.formGroup = new FormGroup(controls);
  }

  private validate(): ValidatorFn {
    return (control: AbstractControl) => this.generateId(control.value) ? null : { error: true };
  }

  private generateFormControl(value: string): AbstractControl {
    return new FormControl(value, [Validators.required, this.validate()]);
  }

  private fillItemsData(ids: string[]): void {
    this.store.dispatch(new productActions.FetchCategory({ name: this.categoryName, ids }));
  }

  private getCondensedMLIds(): string[] {
    return Object.keys(this.MLIds)
      .map(key => this.MLIds[key])
      .reduce((array, total) => total.concat(array), [])
      .filter(id => !this.itemsData[id]);
  }

}
