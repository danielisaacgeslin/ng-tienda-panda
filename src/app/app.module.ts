import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RoutingModule } from './routing/routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

import { StoreService, HttpHelperService, MLService, ToastrService, UtilsService } from './services';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RoutingModule,
    SharedModule
  ],
  providers: [StoreService, HttpHelperService, MLService, ToastrService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
