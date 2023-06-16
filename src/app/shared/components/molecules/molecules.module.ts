import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AtomsModule } from '../atoms/atoms.module';
import { BasicCounterComponent } from './basic-counter/basic-counter.component';
import { HeroeDlComponent } from './heroe-dl/heroe-dl.component';
import { HeroeListComponent } from './heroe-list/heroe-list.component';
import { FormCharacterComponent } from './form-character/form-character.component';

const moleculesComponent = [
  BasicCounterComponent,
  HeroeDlComponent,
  HeroeListComponent,
  FormCharacterComponent,
]

@NgModule({
  declarations: [
    ...moleculesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AtomsModule,
  ],
  exports: [
    ...moleculesComponent
  ]
})
export class MoleculesModule { }
