import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesMainComponent } from './pages/pipes-main/pipes-main.component';

const routes: Routes = [
  {path: 'main', component: PipesMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesAppRoutingModule { }
