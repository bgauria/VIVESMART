import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Usuariosubpreferencia page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-usuariosubpreferencia',
  templateUrl: 'usuariosubpreferencia.html'
})

export class UsuariosubpreferenciaPage {
  items = [
    'Pokémon Yellow',
    'Super Metroid',
    
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

   constructor(public navCtrl: NavController, public navParams: NavParams) {}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad UsuariosubpreferenciaPage');
  }
}

