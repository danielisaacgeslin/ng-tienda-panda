import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'tp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public readonly voidHref = this.sanitizer.bypassSecurityTrustUrl('javascript:void(0)');
  public readonly info = [
    { name: 'Preguntas frecuentes', img: './assets/preg.png', link: '/', blank: false },
    { name: 'Como comprar', img: './assets/comp.png', link: '/', blank: false },
    { name: 'Promociones bancarias', img: './assets/mp.png', link: 'https://www.mercadopago.com.ar/promociones', blank: true }
  ];

  constructor(private sanitizer: DomSanitizer) { }

  public ngOnInit() {

  }

}
