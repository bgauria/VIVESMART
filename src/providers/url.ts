import { Injectable } from '@angular/core';
/*
  Benito
*/
@Injectable()
export class Url {
  public url_usuario= 'http://169.53.13.129/ws_usuario';
  public url_vehiculo= 'http://169.53.13.129/ws_vehiculo';
  public url_ruta= 'http://169.53.13.129/ws_rutas';
  public url_vehiculos_disponibles= 'http://169.53.13.129/ws_vehiculos_disponibles';

  public url_foto= 'http://169.53.13.129/img/';
  constructor() {
  }

}
