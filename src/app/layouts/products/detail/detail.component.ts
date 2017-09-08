import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import { MLService } from '../../../services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public article: IArticle = {};
  

  constructor(
    private route: ActivatedRoute,
    private MLService: MLService,
    @Inject(DOCUMENT) private document: Document
    ) { }

  public ngOnInit() {
    this.route.params.take(1)
      .map(params => params.id)
      .switchMap(id => this.MLService.getItem(id))
      .do(article => this.article = article)
      .subscribe();
    this.document.body.scrollTop = 0;
  }

}
