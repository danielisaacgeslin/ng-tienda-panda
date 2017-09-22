import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { UtilsService } from '../../services';

@Component({
  selector: 'tp-order-by-select',
  templateUrl: './tp-order-by-select.component.html',
  styleUrls: ['./tp-order-by-select.component.scss']
})
export class TpOrderBySelectComponent implements OnInit {

  @Output() orderCriteria: EventEmitter<string> = new EventEmitter();

  public formGroup: FormGroup = new FormGroup({ criteria: new FormControl() });
  public readonly options: { name: string; value: string }[] = this.utilsService.orderByCriterias;

  constructor(private utilsService: UtilsService) { }

  public ngOnInit() {
    this.formGroup.controls.criteria.setValue(this.options[0] && this.options[0].value);
  }

  public onChange(): void {
    this.orderCriteria.emit(this.formGroup.controls.criteria.value);
  }

}
