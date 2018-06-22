import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InnerComponent1Component } from './inner-component1/inner-component1.component';
import { InnerComponent2Component } from './inner-component2/inner-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerComponent1Component,
    InnerComponent2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
