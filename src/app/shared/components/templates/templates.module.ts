import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MoleculesModule } from '../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';
import { Error404PageComponent } from './error404-page/error404-page.component';

const templatesComponent = [
  Error404PageComponent
]
@NgModule({
  declarations: [
   ...templatesComponent,
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
  ],
  exports: [
    ...templatesComponent
  ]
})
export class OrganismsModule { }
