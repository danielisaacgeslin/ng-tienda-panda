import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil, filter, tap } from 'rxjs/operators';

import { Article } from '../../../models';
import { HttpHelperService, UtilsService } from '../../../services';
import { actions as idMapActions, reducer as idMapStateReducer } from '../../../state-mgmt/id-map';
import { actions as productActions, reducer as productStateReducer } from '../../../state-mgmt/product';

@Component({
  selector: 'tp-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit, OnDestroy {

  public products: Article[] = [];
  private readonly categoryName: string = 'promotions';
  private destroy$: Subject<void> = new Subject();
  private ids$: Observable<string[]> = this.store.select(idMapStateReducer.getByCategory(this.categoryName));
  private products$: Observable<Article[]> = this.store.select(productStateReducer.getByCategory(this.categoryName));

  constructor(
    private httpHelperService: HttpHelperService,
    private utilsService: UtilsService,
    private store: Store<idMapStateReducer.State & productStateReducer.State>
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(new idMapActions.Fetch());

    this.ids$.pipe(
      takeUntil(this.destroy$),
      filter(ids => !!ids.length),
      tap(ids => this.store.dispatch(new productActions.FetchCategory({ name: this.categoryName, ids })))
    ).subscribe();

    this.products$.pipe(
      takeUntil(this.destroy$),
      tap(products => this.products = products)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  public orderBy(criteria: string): void {
    this.products = this.utilsService.order(criteria, this.products);
  }
}
