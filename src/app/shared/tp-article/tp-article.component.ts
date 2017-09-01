import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tp-article',
  templateUrl: './tp-article.component.html',
  styleUrls: ['./tp-article.component.scss']
})
export class TpArticleComponent implements OnInit {
  @Input() props: IArticle = {};

  constructor() { }

  public ngOnInit() {

  }

}
