import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TpArticleComponent } from './tp-article/tp-article.component';
import { TpLoadingComponent } from './tp-loading/tp-loading.component';
import { TpTitleComponent } from './tp-title/tp-title.component';
import { TpSocialNetworksComponent } from './tp-social-networks/tp-social-networks.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TpArticleComponent,
    TpLoadingComponent,
    TpTitleComponent,
    TpSocialNetworksComponent
  ],
  exports: [
    TpArticleComponent,
    TpLoadingComponent,
    TpTitleComponent,
    TpSocialNetworksComponent
  ]
})
export class SharedModule { }
