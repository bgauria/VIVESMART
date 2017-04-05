import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

import {Alerta} from '../../providers/alerta';
import {Load} from '../../providers/load';

import {Entity} from '../../providers/entity';
import {Url} from '../../providers/url';


import { RegistroPage } from '../registro/registro';


declare var navigator: any;
declare var Connection: any;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ Alerta, Load, Entity, Url]
})

export class LoginPage {
    public user= '';
    public pass= '';
    
    constructor(public navCtrl: NavController, public storage: Storage,
                 private oAlerta: Alerta, private oLoad: Load, public oEntity: Entity, public oUrl: Url) {   
    }

    public login(){
        try{ 
       /* if(navigator.connection.type == Connection.NONE) {
            this.oAlerta.showSinInternet();
        }else{ */
            if(this.user =='' && this.pass ==''){
                this.oAlerta.show1('Faltan campos por llenar!');	
            }else{
                this.oLoad.showLoading(); 
                var data = JSON.stringify({
                                            KEY: 'KEY_USUARIO_LOGIN',
                                            user: this.user,
                                            pass:  this.pass
                                         });

                this.oEntity.get(data, this.oUrl.url_usuario, 0).finally(() => { 
                    this.oLoad.dismissLoading(); 
                }).subscribe(data => {
                    // console.log('--> ' + JSON.stringify(data));
                     //console.log('::::>' + data.usuario[0].usu_id);
                    if(data.success == 1){
                        this.storage.ready().then(() => {
                           this.storage.set('go_user', JSON.stringify(
                                                                            {
                                                                                usu_id: data.usuario[0].usu_id,
                                                                                full_name: data.usuario[0].full_name,
                                                                                usu_nombre: data.usuario[0].usu_nombre,
                                                                                usu_apellido: data.usuario[0].usu_apellido,
                                                                                usu_direccion: data.usuario[0].usu_direccion,
                                                                                usu_etapa: data.usuario[0].usu_etapa,
                                                                                usu_telefono: data.usuario[0].usu_telefono,
                                                                                usu_correo: data.usuario[0].usu_correo,
                                                                                usu_es_conductor: data.usuario[0].usu_es_conductor  
                                                                            }
                                                                        ));
                        });                                    
               
                    
                        this.navCtrl.setRoot(HomePage);
                    } else {
                        this.oAlerta.show1("Usuario o Contraseña incorrectos!");
                    }   
                }, error => {
                    this.oAlerta.show2('ERROR' ,error , 'OK');

                });
           // }
        }
        }catch(err) {
            this.oAlerta.show1('ERROR' + err);
        } 
    }
     goToRegistro(){
      this.navCtrl.push(RegistroPage,  { });
  }
}
