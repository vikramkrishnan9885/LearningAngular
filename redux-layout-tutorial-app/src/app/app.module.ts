import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/////
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"; 
import { StoreModule } from "@ngrx/store";
import { metaReducer } from "./common/index";
import { TemplateModalComponent } from './template-modal/template-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({ reducer: metaReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
