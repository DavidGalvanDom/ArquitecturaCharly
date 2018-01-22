import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [InicioComponent, NavComponent],
  exports: [NavComponent ]
})
export class CoreModule { }
