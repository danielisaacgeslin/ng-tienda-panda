import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { StoreService } from './store.service';
import { HttpHelperService } from './http-helper.service';
import { constants } from '../constants';

@Injectable()
export class MLService {

  constructor(private httpHelperService: HttpHelperService) { }

  public getItem(id: string): Observable<IArticle> {
    return this.httpHelperService.getItems([id])
      .map(items => items && items[0] || {});
  }

  public getProducts(): Observable<IArticle[]> {
    return this.httpHelperService.getMLIds()
      .switchMap(data => this.httpHelperService.getItems(data.products));
  }

  public getPromotions(): Observable<IArticle[]> {
    return this.httpHelperService.getMLIds()
      .switchMap(data => this.httpHelperService.getItems(data.promotions));
  }

  public getSecondHand(): Observable<IArticle[]> {
    return this.httpHelperService.getMLIds()
      .switchMap(data => this.httpHelperService.getItems(data.secondHand));
  }

}
