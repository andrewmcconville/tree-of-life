import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { TolRoutingModule } from './tol-routing.module';
import { TolComponent } from './tol.component';

@NgModule({
  declarations: [
    TolComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TolRoutingModule
  ],
  providers: [],
  bootstrap: [
    TolComponent
  ]
})
export class TolModule { }
