import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RegistroPage} from '../registro/registro';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage: Storage) {
    
  }
   onClick(){
  	this.navCtrl.push(RegistroPage);
  }

  getRecargar(){
    this.storage.ready().then(() => {
      
        this.storage.remove('vs_user');
        this.storage.remove('ListrutasPage_rutas');
        this.storage.remove('ListmisvehiculosPage_vehiculos');
       
    });

  }

}
