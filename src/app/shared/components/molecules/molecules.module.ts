import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AtomsModule } from '../atoms/atoms.module';
import { BasicCounterComponent } from './basic-counter/basic-counter.component';
import { HeroeDlComponent } from './heroe-dl/heroe-dl.component';
import { HeroeListComponent } from './heroe-list/heroe-list.component';
import { FormCharacterComponent } from './form-character/form-character.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CardListComponent } from './card-list/card-list.component';
import { RouterModule } from '@angular/router';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { SearchBoxDebounceComponent } from './search-box-debounce/search-box-debounce.component';
import { PrimeMenuComponent } from './prime-menu/prime-menu.component';
import { PrimeNgModule } from '@app/shared/prime-ng/prime-ng.module';

const moleculesComponent = [
  BasicCounterComponent,
  HeroeDlComponent,
  HeroeListComponent,
  CardListComponent,
  FormCharacterComponent,
  SidebarComponent,
  SidebarNavComponent,
  SearchBoxComponent,
  SearchBoxDebounceComponent,
  PrimeMenuComponent,
]

@NgModule({
  declarations: [
    ...moleculesComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AtomsModule,
    PrimeNgModule,
  ],
  exports: [
    ...moleculesComponent
  ]
})
export class MoleculesModule { }
