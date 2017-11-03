import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public readonly routes: { link: string; name: string }[] = [
    { link: '/productos', name: 'Hogar' },
    { link: '/promociones', name: 'Bijou' },
    { link: '/segunda-mano', name: 'Varios' }
  ];

  constructor() { }

  public ngOnInit() {

  }

}
