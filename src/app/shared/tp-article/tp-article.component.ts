import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../../models';

@Component({
  selector: 'tp-article',
  templateUrl: './tp-article.component.html',
  styleUrls: ['./tp-article.component.scss']
})
export class TpArticleComponent implements OnInit {
  @Input() props: Article = new Article();

  constructor() { }

  public ngOnInit() {

  }

}
