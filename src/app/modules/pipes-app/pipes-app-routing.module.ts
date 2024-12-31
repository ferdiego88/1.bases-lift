import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PipesMainComponent } from './pipes-main/pipes-main.component';

const routes: Routes = [
  { path: 'main', component: PipesMainComponent,
    children: [
      { path: '', component: BasicsPageComponent },
      { path: 'numbers', component: NumbersPageComponent },
      { path: 'uncommon', component: UncommonPageComponent },
      { path: 'custom', component: OrderComponent },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesAppRoutingModule { }
