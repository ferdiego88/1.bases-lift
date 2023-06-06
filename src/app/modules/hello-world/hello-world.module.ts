import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloWorldRoutingModule } from './hello-world-routing.module';
import { CounterComponent } from './components/counter/counter.component';
import { MoleculesModule } from '@app/shared/components/molecules/molecules.module';


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    HelloWorldRoutingModule,
    MoleculesModule,
  ]
})
export class HelloWorldModule { }
