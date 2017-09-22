import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { ToastrService } from './services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public toasts: IToast[] = this.toastrService.toasts;

  constructor(carouselConfig: NgbCarouselConfig, private toastrService: ToastrService) {
    carouselConfig.interval = 3000;
    carouselConfig.wrap = true;
  }

  public ngOnInit() {

  }

}
