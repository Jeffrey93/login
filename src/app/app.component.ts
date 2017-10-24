import { Component,ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoguearsePage } from './../pages/loguearse/loguearse';
import firebase from 'firebase';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoguearsePage;
  homepage= HomePage;
  loguearse= LoguearsePage;
  @ViewChild('contenido') contenido: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp({
      apiKey: "AIzaSyC4_c2k0kIILMlHmOR2ZNVsXYxTLDQJtT4",
      authDomain: "ateco-5e8b3.firebaseapp.com"
    });
  }
  llamarPagina(pagina){
    //modificar raiz 
    this.contenido.setRoot(pagina);
    this.menuCtrl.close();
  }
  terminarSesion(){

  }
}

