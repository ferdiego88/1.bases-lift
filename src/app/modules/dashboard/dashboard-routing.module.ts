import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent,
   children: [
    { path: 'heroes', loadChildren: () => import('../heroes/heroes.module').then(m => m.HeroesModule) },
    { path: '', loadChildren: () => import('../hello-world/hello-world.module').then(m => m.HelloWorldModule) },
    { path: 'dragon-ball-z', loadChildren: () => import('../dragon-ball-z/dragon-ball-z.module').then(m => m.DragonBallZModule) },
    { path: 'gifs', loadChildren: () => import('../gifs/gifs.module').then(m => m.GifsModule) },
    { path: 'countries', loadChildren: () => import('../countries/countries.module').then(m => m.CountriesModule) },
    { path: 'pipes', loadChildren: () => import('../pipes-app/pipes-app.module').then( m => m.PipesAppModule) },
    { path: 'heroesroute', loadChildren: () => import('../heroesroutes/heroesroutes.module').then( m => m.HeroesroutesModule) },
   ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
