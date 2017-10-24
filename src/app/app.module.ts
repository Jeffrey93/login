import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoguearsePage } from './../pages/loguearse/loguearse';
import { BotonMenuComponent } from './../components/boton-menu/boton-menu';
import { AutenticacionService } from './../../servicios/autenticacion.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoguearsePage,
    BotonMenuComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BotonMenuComponent,
    LoguearsePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AutenticacionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
