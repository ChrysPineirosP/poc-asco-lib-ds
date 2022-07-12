import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PocStorybookLibModule } from 'poc-storybook-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PocStorybookLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
