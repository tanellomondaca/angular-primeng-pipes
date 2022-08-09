import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

// Mis módulos
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale/idioma de la app
import localeEs from '@angular/common/locales/es-CL';
import { registerLocaleData } from "@angular/common";

registerLocaleData( localeEs );


@NgModule({
   declarations: [AppComponent],
   imports: [
      AppRouterModule,
      BrowserModule,
      SharedModule,
      VentasModule],
   providers: [
      { provide: LOCALE_ID, useValue: 'es-CL'}
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}


