import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCounterComponent } from './basic-counter/basic-counter.component';
import { AtomsModule } from '../atoms/atoms.module';



@NgModule({
  declarations: [
    BasicCounterComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
  ]
})
export class MoleculesModule { }
