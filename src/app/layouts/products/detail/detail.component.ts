import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MLService } from '../../../services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public article: IArticle = {};

  constructor(private route: ActivatedRoute, private MLService: MLService) { }

  public ngOnInit() {
    this.route.params.take(1)
      .map(params => params.id)
      .switchMap(id => this.MLService.getItem(id))
      .do(article => this.article = article)
      .do(a=>console.log(a))
      .subscribe();

  }

}
