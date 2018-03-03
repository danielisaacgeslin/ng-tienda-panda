import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil, filter, tap } from 'rxjs/operators';

import { Article, Slide } from '../../../models';
import { UtilsService } from '../../../services';
import { actions as idMapActions, reducer as idMapReducer } from '../../../state-mgmt/id-map';
import { actions as productActions, reducer as productReducer } from '../../../state-mgmt/product';
import { actions as slideActions, reducer as slideReducer } from '../../../state-mgmt/slide';

@Component({
  selector: 'tp-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.scss']
})
export class SportListComponent implements OnInit, OnDestroy {

  public slides: Slide[] = [];
  public products: Article[] = [];
  private readonly categoryName: string = 'products';
  private destroy$: Subject<void> = new Subject();
  private products$: Observable<Article[]> = this.store.select(productReducer.getByCategory(this.categoryName));
  private slides$: Observable<Slide[]> = this.store.select(slideReducer.getList);

  constructor(
    private utilsService: UtilsService,
    private store: Store<idMapReducer.State & productReducer.State>
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(new idMapActions.Fetch());
    this.store.dispatch(new slideActions.Fetch());
    this.store.select(idMapReducer.getByCategory(this.categoryName)).pipe(
      takeUntil(this.destroy$),
      filter(ids => !!ids.length),
      tap(ids => this.store.dispatch(new productActions.FetchCategory({ name: this.categoryName, ids })))
    ).subscribe();

    this.products$.pipe(
      takeUntil(this.destroy$),
      tap(products => this.products = products),
      tap(() => this.orderBy(null))
    ).subscribe();

    this.slides$.pipe(
      takeUntil(this.destroy$),
      tap(list => this.slides = list)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  public orderBy(criteria: string): void {
    this.products = this.utilsService.order(criteria, this.products);
  }

  public getIDFromSlide(slide: Slide): string {
    if (!slide) return '';
    const id: string = slide.src.slice(slide.src.lastIndexOf('/') + 1, slide.src.lastIndexOf('.'));
    return id.includes('MLA') ? id : '';
  }
}
