import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabPage } from '../pages/tab/tab';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any; //= LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

    });
     storage.ready().then(() => {
      storage.get('vs_user').then((val) => {
          if(typeof val === 'undefined' || val === null){
            this.rootPage =LoginPage;
          }else{
            this.rootPage = TabPage;
          }
      });
    });
  }
}
