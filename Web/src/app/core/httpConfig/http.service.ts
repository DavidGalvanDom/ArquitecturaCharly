import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';

import {
    Http,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Request,
    Headers,
    XHRBackend
} from '@angular/http';
import { AngularReduxRequestOptions } from './angular-redux-request.options';

import { LoaderService } from '../loader/loader.service';
import { CONFIG } from '../config';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpService extends Http {

    constructor(backend: XHRBackend,
        defaultOptions: AngularReduxRequestOptions,
        private loaderService: LoaderService,
        private router: Router) {

        super(backend, defaultOptions);
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {

        this.showLoader();
        return super.post(this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
                return Observable.throw(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {

        this.showLoader();
        return super.put(this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
                return Observable.throw(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.showLoader();
        console.log(this.requestOptions(options));
        return super.get(this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
                return Observable.throw(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        
        this.showLoader();
        
        return super.delete(this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
                return Observable.throw(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        options = options === undefined ? null : options;

        if (options === null) {
            options = new AngularReduxRequestOptions();
        }

        if (options.headers === null) {
            options.headers = new Headers();
        }

        return options;
    }

    private getFullUrl(url: string): string {
        return environment.api_url + url;
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    private onSuccess(res: Response): void {
        // console.log('Request successful');
    }

    private onError(res: Response): void {
        console.log(res);
        if (res.status === 401) {
            if (this.router) this.router.navigate(["login"]);
        }
    }

    private onEnd(): void {
        this.hideLoader();
    }

    private showLoader(): void {
        this.loaderService.show();
    }

    private hideLoader(): void {
        this.loaderService.hide();
    }


}
