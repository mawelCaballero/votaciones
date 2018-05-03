
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { wsconfig } from './../config';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {
	constructor(private http: Http) {
	}

	signInWithEmail(credentials): Observable <string> {
		console.log('Sign in with email');
		return this.http.post(
			wsconfig.loginUrl, 
			{'email': credentials.email, 'pass': credentials.password }, 
			{headers: this.getHeaders()}).map( response => {
				const apiResponse = JSON.parse(response['_body']);
				console.log(apiResponse);
				return apiResponse;
				
			});
		// return null;  this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
		// 	 credentials.password);
	}

  
	private getHeaders() {
		return new Headers(  { 
		'Accept': 'application/json, */*',
		'Access-Control-Allow-Origin': '*'
	 	} );
	}
}