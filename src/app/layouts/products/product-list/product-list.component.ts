import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MLService } from '../../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Observable<any> = this.MLService.getProducts();

  constructor(private MLService: MLService) { }

  public ngOnInit() {

  }

}
