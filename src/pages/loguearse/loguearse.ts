import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
        public navParams: NavParams, 
        public autenticacionService: AutenticacionService,
        public alertCtrl: AlertController) {
  }



  iniciarSesion(formulario: NgForm){
    this.autenticacionService
        .iniciarSesion(formulario.value)
        .then(info => alert("usuario conectado"))
        .catch(error =>{
          let alert = this.alertCtrl.create({
            title : "Ocurrió un error",
            message: "Error al iniciar sesión " + error, buttons: ['OK'] 
          })
          alert.present();
        })
  }
  registrarUsuario(formulario: NgForm){
   // console.log(formulario.value.correo);
    this.autenticacionService
        .registrarUsuario(formulario.value)
        .then(info => console.log(info))
        .catch(error => {
          let alerta = this.alertCtrl.create({
            title: "Ocurrió un error",
            message: "Error al registrar usuario " + error, buttons:['OK']
          })
          alerta.present();
        } )
  }
}
