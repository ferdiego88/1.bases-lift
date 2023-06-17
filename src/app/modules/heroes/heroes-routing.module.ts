import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'heroe', component: HeroeComponent},
  {path:'listado', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
