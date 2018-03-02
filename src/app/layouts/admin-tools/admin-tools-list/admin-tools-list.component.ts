import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  AbstractControl,
  Validators,
  ValidatorFn,
  ValidationErrors
} from '@angular/forms';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/empty';

import { environment as env } from '../../../../environments/environment';
import { Article } from '../../../models';
import { MLService, ToastrService } from '../../../services';

@Component({
  selector: 'tp-admin-tools-list',
  templateUrl: './admin-tools-list.component.html',
  styleUrls: ['./admin-tools-list.component.scss']
})
export class AdminToolsListComponent implements OnInit {

  public MLIds: any = {};
  public formKeys: string[] = [];
  public formGroup: FormGroup = new FormGroup({ token: new FormControl('', [Validators.required]) });
  public hiddenCategory: { [key: string]: boolean } = {};
  public savingMLIds: boolean = false;
  public itemsData: { [key: string]: Article } = {};

  private readonly idLength: number = 12;
  private readonly idPrefix: string = 'MLA';
  private token: string;

  constructor(
    private MLService: MLService,
    private http: Http,
    private toastrService: ToastrService
  ) { }

  public ngOnInit() {
    this.MLService.getMLIds()
      .subscribe(ids => {
        this.MLIds = ids;
        this.formKeys = Object.keys(ids);
        this.fillItemsData(this.getCondensedMLIds());
        this.resetForm();
      });
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
    this.saveMLIds();
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
    controls.token = new FormControl(this.token, [Validators.required]);
    this.formGroup = new FormGroup(controls);
  }

  private validate(): ValidatorFn {
    return (control: AbstractControl) => this.generateId(control.value) ? null : { error: true };
  }

  private generateFormControl(value: string): AbstractControl {
    return new FormControl(value, [Validators.required, this.validate()]);
  }

  private saveMLIds() {
    this.savingMLIds = true;
    const headers = new Headers({ token: this.token });
    this.http.post(env.api.mlIds, this.MLIds, { headers })
      .do(data => this.toastrService.toast({ title: 'Exito', message: 'lista salvada', status: 'success' }))
      .catch(error => {
        this.toastrService.toast({ title: 'Error', message: error.json(), status: 'danger' });
        return Observable.empty();
      })
      .finally(() => this.savingMLIds = false)
      .subscribe();
  }

  private fillItemsData(ids: string[]): void {
    this.MLService.getItems(ids)
      .do(data => {
        const newItemsData: { [key: string]: Article } = {};
        data.forEach(item => newItemsData[item.id] = item);
        this.itemsData = Object.assign({}, this.itemsData, newItemsData);
      })
      .subscribe();
  }

  private getCondensedMLIds(): string[] {
    return Object.keys(this.MLIds)
      .map(key => this.MLIds[key])
      .reduce((array, total) => total.concat(array), [])
      .filter(id => !this.itemsData[id]);
  }

}
