import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TpArticleComponent } from './tp-article/tp-article.component';
import { TpLoadingComponent } from './tp-loading/tp-loading.component';
import { TpTitleComponent } from './tp-title/tp-title.component';
import { TpJSONComponent } from './tp-json/tp-json.component';
import { TpSocialNetworksComponent } from './tp-social-networks/tp-social-networks.component';
import { TpToastrComponent } from './tp-toastr/tp-toastr.component';
import { TpOrderBySelectComponent } from './tp-order-by-select/tp-order-by-select.component';

const components = [
  TpArticleComponent,
  TpLoadingComponent,
  TpTitleComponent,
  TpJSONComponent,
  TpSocialNetworksComponent,
  TpToastrComponent,
  TpOrderBySelectComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: components,
  exports: components
})
export class SharedModule { }
