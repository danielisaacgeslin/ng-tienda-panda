import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-social-networks',
  templateUrl: './tp-social-networks.component.html',
  styleUrls: ['./tp-social-networks.component.scss']
})
export class TpSocialNetworksComponent implements OnInit {

  public readonly networks = [
    { link: 'https://www.facebook.com/TiendaPandaArg', img: './assets/face.png', name: 'facebook' },
    { link: 'https://www.instagram.com/tpandaos/?hl=es', img: './assets/insta.png', name: 'instagram' },
    { link: 'http://snapchat.com/add/Tpandaarg', img: './assets/ghost.png', name: 'snapchat' }
  ];

  constructor() { }

  public ngOnInit() {

  }

}
