import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampletestComponent } from './sampletest/sampletest.component';
import { Sampletest1Component } from './sampletest1/sampletest1.component';

@NgModule({
  declarations: [
    AppComponent,
    SampletestComponent,
    Sampletest1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
