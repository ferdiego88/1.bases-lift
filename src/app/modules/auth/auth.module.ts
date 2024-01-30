import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from '@modules/auth/auth-routing.module';
import { LoginComponent } from '@modules/auth/components/login/login.component';
import { RegisterComponent } from '@modules/auth/components/register/register.component';
import { CoreModule } from '@app/core/core.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MaterialModule } from '@app/shared/material/material.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LayoutPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    CoreModule,
    MaterialModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
