import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    NgxDatatableModule
  ],
  entryComponents: [ UsuarioComponent ],
  declarations: [ ListaUsuarioComponent, UsuarioComponent ]
})
export class UsuarioModule { }
