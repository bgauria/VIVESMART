import { Component } from '@angular/core';
import { NavController, NavParams ,Platform} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {Entity} from '../../providers/entity';
import {Url} from '../../providers/url';
import {Alerta} from '../../providers/alerta';
import {Load} from '../../providers/load';
import {Toast} from '../../providers/toast';
import {Fecha} from '../../providers/fecha';
//declare var navigator: any;
//declare var Connection: any;
/*
  Benito Auria García
  0988877109
  bgauria316@gmail.com
*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Entity, Url, Alerta, Load,Fecha, Toast]
})
export class HomePage {
 
  public ifReintentar;
  public _lista_noticias_promocion;
  private su;


   constructor( public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private oUrl: Url
                ,public storage: Storage, public oEntity: Entity,private oAlerta: Alerta, private oLoad: Load, private oF: Fecha , public oT: Toast) {
                  this.ifReintentar= true;

                 
  }

  ionViewWillEnter() {
    this.getCargar();
      /*if(typeof this._lista_usu_sub_preferencia === 'undefined' || this._lista_usu_sub_preferencia.length == 0){ 
            this.storage.get('ListmisvehiculosPage_vehiculos').then((val) => {
                if(val === null){
                    this.getCargar();
                }else{
                    this.su = JSON.parse(val);     
                    if(this.oF.getNumYearMasDia() != this.su.fecha){
                        this.getCargar();
                    }else{
                        this.ifReintentar= false;
                        this._lista_usu_sub_preferencia= this.su.data;
                    }
                }
             });
        }else{
            this.storage.get('ListmisvehiculosPage_vehiculos').then((val) => {
                if(val === null){
                  console.log('4');
                    this.getCargar();
                }
             });
 
        }*/
  }


   getCargar(){
       try{ 
           /* if(navigator.connection.type == Connection.NONE) {
                this.oAlerta.showSinInternet();
                this.ifReintentar= true;  
            }else{*/
                this.ifReintentar= false;
                this.storage.ready().then(() => {
                    this.storage.get('vs_user').then((val) => {
                      this.su = JSON.parse(val);
                      console.log('>>>>>>>>> ' +  this.su.usu_id);
                      this.oLoad.showLoading();
                      var data = JSON.stringify({
                                                  KEY: 'KEY_SELECT_NOTICIAS_PROMOCIONES',
                                                  _id_usuario:  this.su.usu_id
                                                });

                      this.oEntity.get(data, this.oUrl.url_noticias_promociones,0).finally(() => { 
                          this.oLoad.dismissLoading(); 
                      }).subscribe(data => {
                          if(data.success == 1){
                              console.log('>>>>>>>>> ' + JSON.stringify(data));
                              this._lista_noticias_promocion= data.not_promo;
                              /*this.storage.remove('ListmisvehiculosPage_vehiculos'); 
                              this.storage.set('ListmisvehiculosPage_vehiculos',JSON.stringify(
                                                                                    {
                                                                                        data: data.vehiculo,
                                                                                        fecha: this.oF.getNumYearMasDia()
                                                                                    }
                                                                                ));*/
                          } else {
                              this.oT.showToast(data.msg, 'middle');
                              this.ifReintentar= true;
                          } 
                      }, error => {
                          this.oAlerta.showVolverIntentar();
                          this.ifReintentar= true;
                  
                      });
                  });
                });
            //}
      }catch(err) {
        this.oAlerta.showVolverIntentar();
      } 
        
    }
    getRecargar(){
      this.getCargar();
    }
}

