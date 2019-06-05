import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers /*, metaReducers */} from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { AuthEffects } from './store/effects/auth.effects';
import { WelcomeComponent } from './welcome/welcome.component';

// ADDED THIS DIRECTLY FROM REPO. DIG DEEPER
import { HttpClientModule } from "@angular/common/http";
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers /*, { metaReducers }*/),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects, AuthEffects]),
    //
    HttpClientModule,
    StoreRouterConnectingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
