import { Component, OnInit } from '@angular/core';

import { MLService } from '../../../services';

@Component({
  selector: 'app-second-hand-list',
  templateUrl: './second-hand-list.component.html',
  styleUrls: ['./second-hand-list.component.scss']
})
export class SecondHandListComponent implements OnInit {

  public secondHand: IArticle[] = [];

  constructor(private MLService: MLService) { }

  public ngOnInit() {
    this.MLService.getSecondHand().do(data => this.secondHand = data).subscribe();
  }
}
