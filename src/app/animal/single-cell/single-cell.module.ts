import { NgModule } from '@angular/core';

import { SingleCellRoutingModule } from './single-cell-routing.module';
import { SingleCellComponent } from './single-cell.component';

import { BacteriaComponent } from './bacteria/bacteria.component';
import { VirusComponent } from './virus/virus.component';

@NgModule({
  declarations: [
    SingleCellComponent,
    BacteriaComponent,
    VirusComponent
  ],
  imports: [
    SingleCellRoutingModule
  ],
  providers: []
})
export class SingleCellModule { }
