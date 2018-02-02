import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from '../../core/config';
import { HttpService } from '../../core/httpConfig/http.service';
import 'rxjs/add/observable/throw';

import { Usuario } from '../models/usuario.model';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpService) { }

  get(): Observable<Usuario[]> {
    return this.http.get(CONFIG.baseUrls.Usuario,this.getOptionsRequest() )
                    .map(this.extractData)
                    .catch(error => {
                        return Observable.throw(error);
                    });
  }

  guardarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post(CONFIG.baseUrls.Usuario,usuario)
          .map( this.extractData )
          .catch(error => {
              return Observable.throw(error);
          });
  }

  private extractData(response: Response) {
    return response.text() ? response.json() : {}; ;
  }

  private getOptionsRequest(): RequestOptions {
    let token = sessionStorage.getItem('token');
    let headers = new Headers({ 'Content-Type': 'application/X-www-form-urlencoded' });
        headers.append('Authorization', 'Bearer ' + token );
    let options = new RequestOptions({ headers: headers });

    return(options);
  }
}
