import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TpArticleComponent } from './tp-article/tp-article.component';
import { TpLoadingComponent } from './tp-loading/tp-loading.component';
import { TpTitleComponent } from './tp-title/tp-title.component';
import { TpJSONComponent } from './tp-json/tp-json.component';
import { TpSocialNetworksComponent } from './tp-social-networks/tp-social-networks.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TpArticleComponent,
    TpLoadingComponent,
    TpTitleComponent,
    TpJSONComponent,
    TpSocialNetworksComponent
  ],
  exports: [
    TpArticleComponent,
    TpLoadingComponent,
    TpTitleComponent,
    TpJSONComponent,
    TpSocialNetworksComponent
  ]
})
export class SharedModule { }
