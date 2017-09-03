import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { MLService } from '../../../services';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {

  public promotions: IArticle[] = [];
  private subs: Subscription;

  constructor(private MLService: MLService) { }

  public ngOnInit() {
    this.subs = this.MLService.getPromotions()
      .do(data => this.promotions = data)
      .subscribe();
  }

  public ngOnDestroy() {
    if (this.subs) this.subs.unsubscribe();
  }

}
