import { Component, OnInit } from '@angular/core';

import { MLService, UtilsService } from '../../../services';

@Component({
  selector: 'tp-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {

  public promotions: IArticle[] = [];

  constructor(private MLService: MLService, private utilsService: UtilsService) { }

  public ngOnInit() {
    this.MLService.getPromotions()
    .do(data => this.promotions = data)
    .do(() => this.orderBy(null))
    .subscribe();
  }

  public orderBy(criteria: string): void {
    this.promotions = this.utilsService.order(criteria, this.promotions);
  }

}
