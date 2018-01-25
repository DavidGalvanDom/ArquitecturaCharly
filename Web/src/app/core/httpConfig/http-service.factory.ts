import { XHRBackend } from '@angular/http';
import { Router } from '@angular/router';
import { AngularReduxRequestOptions } from './angular-redux-request.options';
import { HttpService } from './http.service';
import { LoaderService } from '../loader/loader.service';

function httpServiceFactory(backend: XHRBackend, options: AngularReduxRequestOptions, loaderService: LoaderService, router: Router ) {
    return new HttpService(backend, options, loaderService,router);
}

export { httpServiceFactory };