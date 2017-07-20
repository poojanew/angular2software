import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {advertiseComponent} from './component/advertisement/advertiseForm';
import {Component, NgModule} from '@angular/core'


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , advertiseComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
