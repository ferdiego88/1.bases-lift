import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'heroes', loadChildren: () => import('./modules/heroes/heroes.module').then(m => m.HeroesModule) },
  { path: '', loadChildren: () => import('./modules/hello-world/hello-world.module').then(m => m.HelloWorldModule) },
  { path: 'dragon-ball-z', loadChildren: () => import('./modules/dragon-ball-z/dragon-ball-z.module').then(m => m.DragonBallZModule) },
  { path: 'gifs', loadChildren: () => import('./modules/gifs/gifs.module').then(m => m.GifsModule) },
  { path: 'countries', loadChildren: () => import('./modules/countries/countries.module').then(m => m.CountriesModule) },
  { path: 'pipes', loadChildren: () => import('./modules/pipes-app/pipes-app.module').then( m => m.PipesAppModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
