import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil, filter, tap } from 'rxjs/operators';

import { Article, Slide } from '../../../models';
import { BannerService, UtilsService } from '../../../services';
import { actions as idMapActions, reducer as idMapReducer } from '../../../state-mgmt/id-map';
import { actions as productActions, reducer as productStateReducer } from '../../../state-mgmt/product';

@Component({
  selector: 'tp-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.scss']
})
export class SportListComponent implements OnInit, OnDestroy {

  public slides: string[] = [];
  public products: Article[] = [];
  private readonly categoryName: string = 'products';
  private destroy$: Subject<void> = new Subject();
  private ids$: Observable<string[]> = this.store.select(idMapReducer.getByCategory(this.categoryName));
  private products$: Observable<Article[]> = this.store.select(productStateReducer.getByCategory(this.categoryName));

  constructor(
    private bannerService: BannerService,
    private utilsService: UtilsService,
    private store: Store<idMapReducer.State & productStateReducer.State>
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

    this.bannerService.getBanners().pipe(
      tap(data => this.slides = data)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  public orderBy(criteria: string): void {
    this.products = this.utilsService.order(criteria, this.products);
  }

  public getIDFromSlide(slide: string): string {
    if (!slide) return '';
    const id: string = slide.slice(slide.lastIndexOf('/') + 1, slide.lastIndexOf('.'));
    return id.includes('MLA') ? id : '';
  }
}
