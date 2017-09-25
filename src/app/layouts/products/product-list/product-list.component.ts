import { Component, OnInit } from '@angular/core';

import { MLService, HttpHelperService, UtilsService } from '../../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public slides: ISlide[] = [];
  public products: IArticle[] = [];

  constructor(
    private MLService: MLService,
    private httpHelperService: HttpHelperService,
    private utilsService: UtilsService
  ) { }

  public ngOnInit() {
    this.MLService.getProducts()
      .do(data => this.products = data)
      .do(() => this.orderBy(null))
      .subscribe();

    this.httpHelperService.getBanners()
      .do(data => this.slides = data)
      .subscribe();
  }

  public orderBy(criteria: string): void {
    this.products = this.utilsService.order(criteria, this.products);
  }
}
