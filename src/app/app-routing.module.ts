import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'heroes', loadChildren: () => import('./modules/heroes/heroes.module').then(m => m.HeroesModule) },
  { path: 'inicio', loadChildren: () => import('./modules/hello-world/hello-world.module').then(m => m.HelloWorldModule) },
  { path: 'dragon-ball-z', loadChildren: () => import('./modules/dragon-ball-z/dragon-ball-z.module').then(m => m.DragonBallZModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
