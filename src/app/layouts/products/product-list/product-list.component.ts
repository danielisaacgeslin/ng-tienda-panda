import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { StoreService, HttpHelperService } from '../../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private productsKey: string = 'products';
  public products: Observable<any> = this.storeService.get(this.productsKey);

  constructor(private storeService: StoreService, private httpHelperService: HttpHelperService) { }

  public ngOnInit() {
    this.httpHelperService.getMLIds()
      .switchMap(data => this.httpHelperService.getItems(data.products))
      .subscribe(data => this.storeService.set(this.productsKey, data));
  }

}
