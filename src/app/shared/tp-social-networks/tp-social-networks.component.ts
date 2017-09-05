import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-social-networks',
  templateUrl: './tp-social-networks.component.html',
  styleUrls: ['./tp-social-networks.component.scss']
})
export class TpSocialNetworksComponent implements OnInit {

  public readonly networks = [
    { link: 'https://www.facebook.com/TiendaPandaArg', img: './assets/face.png', name: 'facebook' },
    { link: '#', img: './assets/insta.png', name: 'instagram' },
    { link: '#', img: './assets/ghost.png', name: 'network' }
  ];

  constructor() { }

  public ngOnInit() {

  }

}
