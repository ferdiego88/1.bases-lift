import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '@app/shared/prime-ng/prime-ng.module';
import { AtomsModule } from '../atoms/atoms.module';
import { BasicCounterComponent } from './basic-counter/basic-counter.component';
import { CardListComponent } from './card-list/card-list.component';
import { FormCharacterComponent } from './form-character/form-character.component';
import { HeroeDlComponent } from './heroe-dl/heroe-dl.component';
import { HeroeListComponent } from './heroe-list/heroe-list.component';
import { PrimeMenuBarComponent } from './prime-menu-bar/prime-menu-bar.component';
import { PrimeMenuComponent } from './prime-menu/prime-menu.component';
import { SearchBoxDebounceComponent } from './search-box-debounce/search-box-debounce.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

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
  PrimeMenuBarComponent,
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
