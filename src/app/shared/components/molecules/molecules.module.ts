import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCounterComponent } from './basic-counter/basic-counter.component';
import { AtomsModule } from '../atoms/atoms.module';

const moleculesComponent = [
  BasicCounterComponent
]

@NgModule({
  declarations: [
    ...moleculesComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
  ],
  exports: [
    ...moleculesComponent
  ]
})
export class MoleculesModule { }
