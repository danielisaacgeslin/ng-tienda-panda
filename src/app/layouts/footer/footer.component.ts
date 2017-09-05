import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public readonly info = [
    { name: 'Preguntas frecuentes', img: './assets/preg.png', link: '/', blank: false },
    { name: 'Como comprar', img: './assets/comp.png', link: '/', blank: false },
    { name: 'Promociones bancarias', img: './assets/mp.png', link: '/', blank: true }
  ];

  constructor() { }

  public ngOnInit() {

  }

}
