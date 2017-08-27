import { Injectable } from '@angular/core';

import { StoreService } from './store.service';
import { HttpHelperService } from './http-helper.service';
import { constants } from '../constants';

@Injectable()
export class MLService {

  constructor(private storeService: StoreService, private httpHelperService: HttpHelperService) { }

  public getProducts() {
    this.httpHelperService.getMLIds()
      .switchMap(data => this.httpHelperService.getItems(data.products))
      .subscribe(data => this.storeService.set(constants.storeKeys.products, data));
    
      return this.storeService.get(constants.storeKeys.products);
  }

}
