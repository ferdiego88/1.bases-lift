import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';

const primeNgComponents = [
  MenuModule
]

@NgModule({
  declarations: [],
  exports: [
    primeNgComponents,
  ]
})
export class PrimeNgModule { }
