import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { StoreService } from './store.service';
import { HttpHelperService } from './http-helper.service';
import { constants } from '../constants';

@Injectable()
export class MLService {

  constructor(private httpHelperService: HttpHelperService) { }

  public getMLIds(): Observable<any> {
    return this.httpHelperService.getMLIds();
  }

  public getItem(id: string): Observable<IArticle> {
    return this.httpHelperService.getItems([id])
      .map(items => items && items[0] || {});
  }

  public getItems(ids: string[]): Observable<IArticle> {
    return this.httpHelperService.getItems(ids);
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
