import { Component } from '@angular/core';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(carouselConfig: NgbCarouselConfig) {
    carouselConfig.interval = 3000;
    carouselConfig.wrap = true;
  }

}
