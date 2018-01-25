import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XHRBackend,RequestOptions  } from '@angular/http';

import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { HttpService } from './httpConfig/http.service';
import { httpServiceFactory } from './httpConfig/http-service.factory';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [InicioComponent, NavComponent, LoaderComponent, SidebarComponent],
  providers: [LoaderService,
                {
                      provide: HttpService,
                      useFactory: httpServiceFactory,
                      deps: [XHRBackend, RequestOptions, LoaderService ]
                }
            ],
  exports: [NavComponent,SidebarComponent, LoaderComponent]
})
export class CoreModule { }
