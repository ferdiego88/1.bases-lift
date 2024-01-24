import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

const primeNgComponents = [
  MenuModule,
  MenubarModule,
  ButtonModule,
  CardModule,
  FieldsetModule,
  PanelModule,
  ToolbarModule,
  TableModule
]

@NgModule({
  declarations: [],
  exports: [
    primeNgComponents,
  ]
})
export class PrimeNgModule { }
