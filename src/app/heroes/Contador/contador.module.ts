import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContadorComponent } from './contador.component';

@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports:[
    ContadorComponent
  ],  
  imports: [
    BrowserModule
  ],
  providers: []
})
export class ContadorModule { }