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
    /** @todo this is a quick fix, this should be fixed to avoid excesive calls in the future */
    this.httpHelperService.getRunTimeConstants()
      .do(data => this.slides = data.productsSlides)
      .subscribe();
  }

  public orderBy(criteria: string): void {
    this.products = this.utilsService.order(criteria, this.products);
  }
}
