import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { MainGifsComponent } from './main-gifs/main-gifs.component';
import { MoleculesModule } from '@app/shared/components/molecules/molecules.module';


@NgModule({
  declarations: [
    MainGifsComponent,
  ],
  imports: [
    CommonModule,
    GifsRoutingModule,
    MoleculesModule,
  ]
})
export class GifsModule { }
