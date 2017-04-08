import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from  '../login/login';
/*
  Generated class for the Perfil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  setCerrarSesion(){
    this.storage.ready().then(() => {
      
        this.storage.remove('vs_user');
        this.storage.remove('ListrutasPage_rutas');
        this.storage.remove('ListmisvehiculosPage_vehiculos');
        this.navCtrl.parent.parent.setRoot(LoginPage);
    });

  }
}
