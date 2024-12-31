import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { AuthModule } from '@modules/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

//Configuracion del locale de la app
import localeEsPE from "@angular/common/locales/es-PE";
import localeFrCA from "@angular/common/locales/fr-CA";

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsPE);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    AuthModule,
  ],
  providers: [
   { provide: LOCALE_ID, useValue: 'es-PE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
