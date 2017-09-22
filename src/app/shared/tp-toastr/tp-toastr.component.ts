import { Component, OnInit, Input } from '@angular/core';

import { ToastrService } from '../../services';

@Component({
  selector: 'tp-toastr',
  templateUrl: './tp-toastr.component.html',
  styleUrls: ['./tp-toastr.component.scss']
})
export class TpToastrComponent implements OnInit {

  @Input() toast: IToast = {};

  constructor(private toastrService: ToastrService) { }

  public ngOnInit() {

  }

  public removeToast(id: number): boolean {
    return this.toastrService.removeToast(id);
  }

}
