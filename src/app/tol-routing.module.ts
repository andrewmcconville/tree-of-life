import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'animal', loadChildren: './animal/animal.module#AnimalModule' },
  { path: 'plant', loadChildren: './plant/plant.module#PlantModule' },
  { path: '', children: [] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TolRoutingModule { }
