import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VentasModule } from './ventas/ventas.module';

//Idioma
import localEs from '@angular/common/locales/es-AR';
import { LOCATION_INITIALIZED, registerLocaleData } from '@angular/common';

registerLocaleData(localEs);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRouterModule, VentasModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
