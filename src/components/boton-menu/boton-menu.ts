import { Component } from '@angular/core';

/**
 * Generated class for the BotonMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'boton-menu',
  templateUrl: 'boton-menu.html'
})
export class BotonMenuComponent {

  text: string;

  constructor() {
    console.log('Hello BotonMenuComponent Component');
    this.text = 'Hello World';
  }

}
