import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public readonly routes: { link: string; name: string }[] = [
    { link: '/products', name: 'Products' },
    { link: '/promotions', name: 'Promotions' },
    { link: '/secondHand', name: 'Segunda Mano' }
  ];

  constructor() { }

  public ngOnInit() {

  }

}
