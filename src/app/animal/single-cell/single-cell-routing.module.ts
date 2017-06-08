import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleCellComponent } from './single-cell.component';
import { BacteriaComponent } from './bacteria/bacteria.component';
import { VirusComponent } from './virus/virus.component';

const routes: Routes = [
  { path: '', component: SingleCellComponent,
    children: [
      { path: 'bacteria', component: BacteriaComponent },
      { path: 'virus', component: VirusComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleCellRoutingModule { }
