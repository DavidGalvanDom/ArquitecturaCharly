import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../core/httpConfig/http.service';
import 'rxjs/add/observable/throw';

import { Ciudad } from '../models/ciudad.model';
import { CONFIG } from '../../core/config';

@Injectable()
export class CiudadService {

  constructor(private http: HttpService) { }

  get(): Observable<Ciudad[]> {
    return this.http.get(CONFIG.baseUrls.Ciudad )
                    .map(this.extractData)
                    .catch(error => {
                        return Observable.throw(error);
                    });
  }

  private extractData(response: Response) {
    var result = response.text() ? response.json() : {};
    if(result.success){
      return result.data;
    } else {
      return Observable.throw(result.message);
    }
  }
}
