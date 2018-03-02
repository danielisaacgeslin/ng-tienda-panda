import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { reducers, initialState } from './state-mgmt/root-reducer';
import { Effects as idMapEffects } from './state-mgmt/id-map';

import { RoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

import { HttpHelperService, MLService, ToastrService, UtilsService } from './services';
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
    StoreModule.forRoot(reducers, initialState),
    environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 50 }),
    EffectsModule.forRoot([idMapEffects]),
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }), // needs https
    HttpClientModule,
    NgbModule.forRoot(),
    RoutingModule,
    SharedModule
  ],
  providers: [HttpHelperService, MLService, ToastrService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
