import { NgModule } from '@angular/core';

import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalComponent } from './animal.component';

import { BirdComponent } from './bird/bird.component';
import { InsectComponent } from './insect/insect.component';
import { MammalComponent } from './mammal/mammal.component';

@NgModule({
  declarations: [
    AnimalComponent,
    BirdComponent,
    InsectComponent,
    MammalComponent
  ],
  imports: [
    AnimalRoutingModule
  ],
  providers: []
})
export class AnimalModule { }
