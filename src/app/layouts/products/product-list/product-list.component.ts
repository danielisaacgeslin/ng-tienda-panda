import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { constants } from '../../../constants';
import { MLService } from '../../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public readonly slides: ISlide[] = constants.productsSlides;
  public products: IArticle[] = [];
  private subs: Subscription;

  constructor(private MLService: MLService) { }

  public ngOnInit() {
    this.subs = this.MLService.getProducts()
      .do(data => this.products = data)
      .subscribe();
  }

  public ngOnDestroy() {
    if (this.subs) this.subs.unsubscribe();
  }

}
