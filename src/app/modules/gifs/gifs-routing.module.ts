import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGifsComponent } from './main-gifs/main-gifs.component';

const routes: Routes = [
  {path: 'main',component: MainGifsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifsRoutingModule { }
