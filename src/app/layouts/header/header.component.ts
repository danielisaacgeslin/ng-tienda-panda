import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public readonly routes: { link: string; name: string }[] = [
    { link: '/productos', name: 'Productos' },
    { link: '/promociones', name: 'Promociones' },
    { link: '/segunda-mano', name: 'Segunda Mano' }
  ];

  constructor() { }

  public ngOnInit() {

  }

}
