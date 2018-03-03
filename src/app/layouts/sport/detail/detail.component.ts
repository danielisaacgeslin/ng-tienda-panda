import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { take, filter, switchMap, tap, map } from 'rxjs/operators';

import { Article } from '../../../models';
import { actions as productActions, reducer as productStateReducer } from '../../../state-mgmt/product';
import { MLService } from '../../../services';

@Component({
  selector: 'tp-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public article: Article = new Article();
  private readonly categoryName: string = 'details';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<productStateReducer.State>,
    @Inject(DOCUMENT) private document: Document
  ) { }

  public ngOnInit(): void {
    this.route.params.pipe(
      take(1),
      map(params => params.id),
      tap(id => this.store.dispatch(new productActions.FetchById({ name: this.categoryName, id }))),
      switchMap(id => this.store.select(productStateReducer.getById(id))),
      filter(Boolean),
      take(1),
      tap(artcle => this.article = artcle),
      tap(() => this.scrollToTop())
    ).subscribe();
  }

  private scrollToTop(): void {
    this.document.documentElement.scrollTop = 0;
  }
}
