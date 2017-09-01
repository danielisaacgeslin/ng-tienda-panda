import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TpArticleComponent } from './tp-article/tp-article.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TpArticleComponent],
  exports: [TpArticleComponent]
})
export class SharedModule { }
