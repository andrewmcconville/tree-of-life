import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalComponent } from './animal.component';
import { BirdComponent } from './bird/bird.component';
import { InsectComponent } from './insect/insect.component';
import { MammalComponent } from './mammal/mammal.component';

const routes: Routes = [
  { path: '', component: AnimalComponent,
    children: [
      { path: 'bird', component: BirdComponent },
      { path: 'insect', component: InsectComponent },
      { path: 'mammal', component: MammalComponent },
      { path: 'single-cell', loadChildren: './single-cell/single-cell.module#SingleCellModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
