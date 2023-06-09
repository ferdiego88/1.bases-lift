import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@modules/auth/components/login/login.component';
import { RegisterComponent } from '@modules/auth/components/register/register.component';

const routes: Routes = [
    {path: 'login',component: LoginComponent },
    {path: 'register',component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
