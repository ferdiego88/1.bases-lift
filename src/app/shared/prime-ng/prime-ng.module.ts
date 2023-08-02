import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';

const primeNgComponents = [
  MenuModule,
  MenubarModule,
  ButtonModule,
  CardModule,
  FieldsetModule,
  PanelModule
]

@NgModule({
  declarations: [],
  exports: [
    primeNgComponents,
  ]
})
export class PrimeNgModule { }
