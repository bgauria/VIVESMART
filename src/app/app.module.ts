import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { TabPage } from '../pages/tab/tab';
import { UsuariosubpreferenciaPage } from '../pages/usuariosubpreferencia/usuariosubpreferencia';
import { LogrosPage } from '../pages/logros/logros';
import { PerfilPage } from '../pages/perfil/perfil';
import { PromosPage } from '../pages/promos/promos';
import { TipsPage } from '../pages/tips/tips';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    TabPage,
    UsuariosubpreferenciaPage,
    LogrosPage,
    PerfilPage,
    PromosPage,
    TipsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    TabPage,
    UsuariosubpreferenciaPage,
    LogrosPage,
    PerfilPage,
    PromosPage,
    TipsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
