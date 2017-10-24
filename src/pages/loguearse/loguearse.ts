import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from '@angular/forms';

import { AutenticacionService } from './../../../servicios/autenticacion.service';
/**
 * Generated class for the LoguearsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loguearse',
  templateUrl: 'loguearse.html',
})
export class LoguearsePage {

  constructor(public navCtrl: NavController,
        public navParams: NavParams, public autenticacionService: AutenticacionService) {
  }



  iniciarSesion(formulario: NgForm){

  }
  registrarUsuario(formulario: NgForm){
   // this.autenticacionService.registrarUsuario(correo, password)
  }
}
