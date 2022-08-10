import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Mis módulos
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale/idioma de la app
import localeEs from '@angular/common/locales/es-CL';
import { registerLocaleData } from "@angular/common";

registerLocaleData( localeEs );

// Agregar otro idioma
import localeFr from '@angular/common/locales/fr';
registerLocaleData( localeFr );


@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserAnimationsModule,
      BrowserModule,
      AppRouterModule,
      SharedModule,
      VentasModule],
   providers: [
      { provide: LOCALE_ID, useValue: 'es-CL'}
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}


