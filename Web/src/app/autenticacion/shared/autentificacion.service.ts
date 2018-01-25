import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { CONFIG } from '../../core/config';
import { HttpService } from '../../core/httpConfig/http.service';
import { Usuairo } from '../shared/usuario.model';

@Injectable()
export class AutentificacionService {

  constructor(private http: HttpService) { }

  loginUser(credenciales: any)  : Observable<Usuairo> {
   
    var body = "username=" + credenciales.usuario +
               "&password=" + credenciales.contrasena +
               "&client_id=199153c2315149bc9ecb3e85e03f1144" +
               "&grant_type=password";
    return this.http.post(CONFIG.baseUrls.token ,body,this.getOptionsRequest() )
    .map(this.extractData)
    .catch(error => {
      return Observable.throw(error);
    });
  }

  private extractData(response: Response) {
    return response.text() ? response.json() : {};
  }

  private getOptionsRequest(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        headers.append('Accept', 'applitacion/json ' );
    let options = new RequestOptions({ headers: headers });

    return(options);
  }
}
