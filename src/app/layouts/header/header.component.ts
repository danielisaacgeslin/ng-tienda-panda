import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public readonly routes: { link: string; name: string }[] = [
    { link: '/sports', name: 'Sports' },
    { link: '/juegos', name: 'Juegos' },
    { link: '/hogar', name: 'Hogar' }
  ];

  constructor() { }

  public ngOnInit() {

  }

}
