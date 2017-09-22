import { Component, OnInit } from '@angular/core';

import { MLService, UtilsService } from '../../../services';

@Component({
  selector: 'app-second-hand-list',
  templateUrl: './second-hand-list.component.html',
  styleUrls: ['./second-hand-list.component.scss']
})
export class SecondHandListComponent implements OnInit {

  public secondHand: IArticle[] = [];

  constructor(private MLService: MLService, private utilsService: UtilsService) { }

  public ngOnInit() {
    this.MLService.getSecondHand()
      .do(data => this.secondHand = data)
      .do(() => this.orderBy(null))
      .subscribe();
  }

  public orderBy(criteria: string): void {
    this.secondHand = this.utilsService.order(criteria, this.secondHand);
  }
}
