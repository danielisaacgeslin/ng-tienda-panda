import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  AbstractControl,
  Validators,
  ValidatorFn,
  ValidationErrors
} from '@angular/forms';

import { MLService, HttpHelperService } from '../../../services';

@Component({
  selector: 'app-admin-tools-list',
  templateUrl: './admin-tools-list.component.html',
  styleUrls: ['./admin-tools-list.component.scss']
})
export class AdminToolsListComponent implements OnInit {

  public MLIds: any = {};
  public formKeys: string[] = [];
  public formGroup: FormGroup = new FormGroup({});
  public hiddenCategory: { [key: string]: boolean } = {};

  private readonly idLength: number = 12;
  private readonly idPrefix: string = 'MLA';

  constructor(private MLService: MLService, private httpHelperService: HttpHelperService) { }

  public ngOnInit() {
    this.MLService.getMLIds()
      .subscribe(ids => {
        this.MLIds = ids;
        this.formKeys = Object.keys(ids)
        this.resetForm();
      });
  }

  public getFieldNames(key: string): string[] {
    return Object.keys(this.formGroup.controls).filter(name => name.includes(key));
  }

  public onSubmit(): void {
    if (!this.formGroup.valid) return;

    const MLIds: any = {};
    for (let controlKey in this.formGroup.controls) {
      let key: string = controlKey.slice(0, controlKey.indexOf('-'));
      MLIds[key] = MLIds[key] || [];
      const value = this.generateId(this.formGroup.controls[controlKey].value);
      if (value) MLIds[key].push(value);
    }
    this.MLIds = MLIds;
    this.resetForm();
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
    let maxNumber: number = keys
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
    let controls: { [key: string]: AbstractControl } = {};
    for (let key in this.MLIds) {
      this.MLIds[key].forEach((id: string, index: number) => {
        controls[`${key}-${index}`] = this.generateFormControl(id);
      });
    }
    this.formGroup = new FormGroup(controls);
  }

  private validate(): ValidatorFn {
    return (control: AbstractControl) => this.generateId(control.value) ? null : { error: true };
  }

  private generateFormControl(value: string): AbstractControl {
    return new FormControl(value, [Validators.required, this.validate()]);
  }

}
