import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MLService } from '../../../services';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {

  public promotions: Observable<any> = this.MLService.getPromotions();

  constructor(private MLService: MLService) { }

  public ngOnInit() {

  }

}
