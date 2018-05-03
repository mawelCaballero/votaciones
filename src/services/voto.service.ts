import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Voto } from '../model/voto';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import { wsconfig } from './../config';
import { HttpUtils } from './../utils/http-utils';

@Injectable()
export class VotoService {


  constructor(private http: Http) {
  }


  createVoto(token:string, userId: string, muestraId:string, 
    indicadorId: string, valoracion: Number) {

        return this.http.post( wsconfig.wsUrl + 'voto',
        { 'idVotante': userId, 
          'idMuestra': muestraId, 
          'idIndicador': indicadorId, 
          'valoracion': valoracion }, HttpUtils.getHeaders(token)).map(
              response => {
                return this.bindVoto(response);
            },
            error => {
                console.log('something was wrong, ', error);
            }
          ); 


  }

  getVotorByUserMuestraIndicador(token:string, userId: string, muestraId:string, 
    indicadorId: string ): Observable<Voto> {
    return this.http.get(wsconfig.wsUrl + `voto/${userId}/${muestraId}/${indicadorId}`, 
    HttpUtils.getHeaders(token) ).map(
        response => {
          return this.bindVoto(response);
        },
        error => {
            console.log('something was wrong, ', error);
        }
    );
  }

  private bindVoto(response: any): Voto {
    
    const apiResponse = JSON.parse(response['_body']);
    if (!_.isNil(apiResponse)) {
        const element = apiResponse;
        return new Voto(element._id, 
            element.idVotante, 
            element.idMuestra, 
            element.idIndicador,
            element.valoracion);
      }
    
    return null;
  }
}
