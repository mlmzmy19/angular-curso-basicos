import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from './listado.component';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],  
  exports:[
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class HeroeModule { }
