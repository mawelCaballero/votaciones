import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import { wsconfig } from './../config';
import { HttpUtils } from './../utils/http-utils';

@Injectable()
export class UsuarioService {


  constructor(private http: Http) {
  }

  getUserByUser(token:string, userId: string ): Observable<User> {
    return this.http.get(wsconfig.wsUrl + `user/${userId}`  , 
    HttpUtils.getHeaders(token) ).map(
        response => {
          return this.bindVotante(response);
        },
        error => {
            console.log('something was wrong, ', error);
        }
    );
  }

  private bindVotante(response: any): User {
    
    const apiResponse = JSON.parse(response['_body']);
    if (!_.isNil(apiResponse)) {
        const element = apiResponse;
        return new User(element._id, element.id, element.user, element.pass,
            element.descripcion, element.email,
            element.voto, element.tipo_votante, element.muestras)
      }
    
    return null;
  }
}
