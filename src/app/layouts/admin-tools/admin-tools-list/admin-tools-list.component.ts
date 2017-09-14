import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';

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
    const MLIds: any = {};
    for (let controlKey in this.formGroup.controls) {
      let key: string = controlKey.slice(0, controlKey.indexOf('-'));
      MLIds[key] = MLIds[key] || [];
      let value = this.formGroup.controls[controlKey].value || '';
      if(!value || value.indexOf(this.idPrefix) === -1) continue;
      while (value.indexOf('-') !== -1) value = value.replace('-', '');
      let index: number = value.indexOf(this.idPrefix);
      value = value.slice(index, index + this.idLength);
      if (value) MLIds[key].push(value);
    }
    this.MLIds = MLIds;
    this.resetForm();
  }

  public toggleHiddenCategory(key: string): void {
    this.hiddenCategory[key] = !this.hiddenCategory[key];
  }

  private resetForm(): void {
    let controls: { [key: string]: AbstractControl } = {};
    for (let key in this.MLIds) {
      this.MLIds[key].forEach((id: string, index: number) => {
        controls[`${key}-${index}`] = new FormControl(id);
      });
    }
    this.formGroup = new FormGroup(controls);
  }

}
