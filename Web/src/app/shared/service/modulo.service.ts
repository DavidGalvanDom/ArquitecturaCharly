import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { CONFIG } from '../../core/config';
import { HttpService } from '../../core/httpConfig/http.service';
import { Modulo } from '../models/modulo.model';

@Injectable()
export class ModuloService {

  constructor(private http: HttpService) { }

  obtenerModulos(): Observable<Modulo[]> {
      return this.http.get(CONFIG.baseUrls.Modulo )
      .map(this.extractData)
      .catch(error => {
      return Observable.throw(error);
      });
  }

  private extractData(response: Response) {
    return response.text() ? response.json() : {};
  }
}
