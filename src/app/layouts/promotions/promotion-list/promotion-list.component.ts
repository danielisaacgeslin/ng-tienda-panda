import { Component, OnInit } from '@angular/core';

import { MLService } from '../../../services';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {

  public promotions: IArticle[] = [];

  constructor(private MLService: MLService) { }

  public ngOnInit() {
    this.MLService.getPromotions().do(data => this.promotions = data).subscribe();
  }

}
