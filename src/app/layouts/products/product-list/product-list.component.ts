import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { constants } from '../../../constants';
import { MLService, HttpHelperService } from '../../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public slides: ISlide[] = [];
  public products: IArticle[] = [];

  constructor(private MLService: MLService, private httpHelperService: HttpHelperService) { }

  public ngOnInit() {
    this.MLService.getProducts().do(data => this.products = data).subscribe();
    /** @todo this is a quick fix, this should be fixed to avoid excesive calls in the future */
    this.httpHelperService.getRunTimeConstants().do(data => this.slides = data.productsSlides).subscribe();
  }
}
