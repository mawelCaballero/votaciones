import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import { Indicador } from '../model/indicador';
import { wsconfig } from './../config';
import { HttpUtils } from './../utils/http-utils';

@Injectable()
export class IndicadorService {


  constructor(private http: Http) {
  }

  getIndicadorById(token:string, indicadorId: string ): Observable<Indicador> {
    return this.http.get(wsconfig.wsUrl + `indicador/${indicadorId}`  , 
    HttpUtils.getHeaders(token) ).map(
        response => {
          return this.bindIndicador(response);
        },
        error => {
            console.log('something was wrong, ', error);
        }
    );
  }

  private bindIndicador(response: any): Indicador {
    
    const apiResponse = JSON.parse(response['_body']);
    if (!_.isNil(apiResponse)) {
        const element = apiResponse;
        return new Indicador(element._id, element.id, element.descripcion);
      }
    
    return null;
  }
}
