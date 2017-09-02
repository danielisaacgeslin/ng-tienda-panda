import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TpArticleComponent } from './tp-article/tp-article.component';
import { TpLoadingComponent } from './tp-loading/tp-loading.component';
import { TpTitleComponent } from './tp-title/tp-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TpArticleComponent, TpLoadingComponent, TpTitleComponent],
  exports: [TpArticleComponent, TpLoadingComponent, TpTitleComponent]
})
export class SharedModule { }
