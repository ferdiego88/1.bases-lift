import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHeroesComponent } from './pages/main-heroes/main-heroes.component';


const routes: Routes = [
  { path: 'main', component: MainHeroesComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutesRoutingModule { }
