import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    // HttpClientModule, // Importa el módulo HttpClientModule --> esto en Angular 18 ya esta deprecado
    IonicModule.forRoot({
      mode: 'ios' // Establece el modo global de la app a 'ios'
      })
  ],
  // solución para que al recargar la página no de error 404
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, provideHttpClient()], // { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  bootstrap: [AppComponent],
})
export class AppModule {}
