import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Muestra } from '../model/muestra';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import { wsconfig } from './../config';
import { HttpUtils } from './../utils/http-utils';

@Injectable()
export class MuestraService {


  constructor(private http: Http) {
  }

  getMuestraById(token:string, muestraId: string ): Observable<Muestra> {
    return this.http.get(wsconfig.wsUrl + `muestra/${muestraId}`  , 
    HttpUtils.getHeaders(token) ).map(
        response => {
          return this.bindMuestra(response);
        },
        error => {
            console.log('something was wrong, ', error);
        }
    );
  }

  private bindMuestra(response: any): Muestra {
    
    const apiResponse = JSON.parse(response['_body']);
    if (!_.isNil(apiResponse)) {
        const element = apiResponse;
        return new Muestra(element._id, element.id, element.descripcion, 
            element.categoria,element.img, element.indicadores);
      }
    
    return null;
  }
}
