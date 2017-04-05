import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

import {Entity} from '../../providers/entity';
import {Url} from '../../providers/url';
import {Alerta} from '../../providers/alerta';
import {Load} from '../../providers/load';
import {Validartxt} from '../../providers/validartxt';

/*
  Benito
*/
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
  providers: [Entity, Url, Alerta, Load, Validartxt]
})
export class RegistroPage {
  public _txtNombre ='';
  public _txtApellido ='';
  public _txtDireccion ='';
  public _txtEtapa ='';
  public _txtMovil ='';
  public _txtCorreo ='';
  public _txtUser ='';
  public _txtPass ='';
  public _txtConfirmar ='';

  public validarTxt= true;

  constructor(public navCtrl: NavController, public storage: Storage, public oEntity: Entity, public oUrl: Url,
                 private oAlerta: Alerta, private oLoad: Load, private vtxt: Validartxt) { 

   
    }
     
     public registrar(){
       try{ 

       // let validarTxt= true;
         /*if(navigator.connection.type == Connection.NONE) {
                this.oAlerta.showSinInternet();
            }else{*/
                
                this.validarTxt = true;
                if(this.vtxt.validarTxtVacio(this._txtNombre) &&  this.validarTxt){
                    this.oAlerta.show1('Debes agregar un nombre!');	
                    this.validarTxt= false;
                }
                if(this.vtxt.validarTxtVacio(this._txtApellido) &&  this.validarTxt){
                    this.oAlerta.show1('Debes agregar un apellido!');	
                    this.validarTxt= false;
                }
                if(this.vtxt.validarTxtVacio(this._txtDireccion) &&  this.validarTxt){
                    this.oAlerta.show1('Debes agregar una dirección!');	
                    this.validarTxt= false;
                }
                if(this.vtxt.validarTxtVacio(this._txtEtapa) &&  this.validarTxt){
                    this.oAlerta.show1('Debes agregar una etapa!');	
                    this.validarTxt= false;
                }
                if(this.vtxt.validarTxtVacio(this._txtMovil) &&  this.validarTxt){
                    this.oAlerta.show1('Debes agregar un móvil!');	
                    this.validarTxt= false;
                }
                if(this.vtxt.validarTxtVacio(this._txtCorreo) &&  this.validarTxt){
                    this.oAlerta.show1('Debes agregar un correo!');	
                    this.validarTxt= false;
                }
                if(this.vtxt.validarTxtVacio(this._txtUser) &&  this.validarTxt){
                    this.oAlerta.show1('Debes agregar un user!');	
                    this.validarTxt= false;
                }
                if(this.vtxt.validarTxtVacio(this._txtPass) &&  this.validarTxt){
                    this.oAlerta.show1('Debes agregar una contraseña!');	
                    this.validarTxt= false;
                }
                if(this.vtxt.validarTxtVacio(this._txtConfirmar) &&  this.validarTxt){
                    this.oAlerta.show1('Debes agregar la confirmación!');	
                    this.validarTxt= false;
                }


                if(this.validarTxt){       
                    this.oLoad.showLoading(); 
                    var data = JSON.stringify({
                       KEY: 'KEY_USUARIO_CREATE',
                       _nombre: this._txtNombre,
                       _apellido: this._txtApellido,
                       _direccion: this._txtDireccion,
                       _etapa: this._txtEtapa,
                       _telefono: this._txtMovil,
                       _correo: this._txtCorreo,
                       _user: this._txtUser,
                       _pass: this._txtPass
                     });

                    this.oEntity.get(data, this.oUrl.url_usuario, 0).finally(() => { 
                        this.oLoad.dismissLoading(); 
                    }).subscribe(data => {
                         if(data.success == 1){
                            this.storage.ready().then(() => {
                               this.storage.set('go_user', JSON.stringify(
                                {
                                    usu_id: data.usu_id,
                                    full_name: data.full_name,
                                    usu_nombre: data.usu_nombre,
                                    usu_apellido: data.usu_apellido,
                                    usu_direccion: data.usu_direccion,
                                    usu_etapa: data.usu_etapa,
                                    usu_telefono: data.usu_telefono,
                                    usu_correo: data.usu_correo,
                                    usu_es_conductor: data.usu_es_conductor  
                                 }
                              ));
                            });                                    
                
                        
                            this.navCtrl.setRoot(HomePage);
                        } else {
                            //this.oAlerta.show1("Usuario o Contraseña incorrectos!");
                            this.oAlerta.show1(data.msg);
                        } 
                    }, error => {
                        this.oAlerta.showVolverIntentar();
                    });
                }
            //}
          }catch(err) {
             this.oAlerta.showVolverIntentar();
          } 
    }

  

}
