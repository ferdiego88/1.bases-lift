import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganismsRoutingModule } from './organisms-routing.module';
import { MainCharacterComponent } from './main-character/main-character.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';

const organismsComponent = [
  MainCharacterComponent,
]
@NgModule({
  declarations: [
   ...organismsComponent,
  ],
  imports: [
    CommonModule,
    OrganismsRoutingModule,
    AtomsModule,
    MoleculesModule,
  ],
  exports: [
    ...organismsComponent
  ]
})
export class OrganismsModule { }
