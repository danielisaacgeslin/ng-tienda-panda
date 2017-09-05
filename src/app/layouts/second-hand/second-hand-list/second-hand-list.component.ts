import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { MLService } from '../../../services';

@Component({
  selector: 'app-second-hand-list',
  templateUrl: './second-hand-list.component.html',
  styleUrls: ['./second-hand-list.component.scss']
})
export class SecondHandListComponent implements OnInit {

  public secondHand: IArticle[] = [];
  private subs: Subscription;

  constructor(private MLService: MLService) { }

  public ngOnInit() {
    this.subs = this.MLService.getSecondHand()
      .do(data => this.secondHand = data)
      .subscribe();
  }

  public ngOnDestroy() {
    if (this.subs) this.subs.unsubscribe();
  }

}
