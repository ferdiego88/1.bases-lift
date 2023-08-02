import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesMainComponent } from './pages/pipes-main/pipes-main.component';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

const routes: Routes = [
  { path: 'main', component: PipesMainComponent,
    children: [
      { path: '', component: BasicsPageComponent },
      { path: 'numbers', component: NumbersPageComponent },
      { path: 'uncommon', component: UncommonPageComponent },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesAppRoutingModule { }