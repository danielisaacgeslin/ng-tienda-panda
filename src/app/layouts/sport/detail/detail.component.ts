import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { empty } from 'rxjs/observable/empty';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { Article } from '../../../models';
import { MLService } from '../../../services';

@Component({
  selector: 'tp-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public article: Article = new Article();


  constructor(
    private route: ActivatedRoute,
    private MLService: MLService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  public ngOnInit() {
    this.route.params.take(1)
      .map(params => params && params.id)
      .switchMap(id => id ? this.MLService.getItem(id) : empty())
      .do(article => this.article = article)
      .subscribe();
    this.document.body.scrollTop = 0;
  }

}
