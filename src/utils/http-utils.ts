
import { Headers} from '@angular/http';


export class HttpUtils {


    static getHeaders(token?: string) {
        const options = {headers: new Headers()};
        options.headers.set('Accept','application/json, text/plain, */*');
        options.headers.set('Content-Type','application/json');
        if (token) options.headers.set('Authorization', `Bearer ${token}`);
        return options;
      }
    
}