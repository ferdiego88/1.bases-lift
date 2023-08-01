import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

const primeNgComponents = [
  MenuModule,
  MenubarModule,
]

@NgModule({
  declarations: [],
  exports: [
    primeNgComponents,
  ]
})
export class PrimeNgModule { }
