import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SharedModule } from '../shared/shared.module';
import { UsuarioService } from './shared/usuario.service';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    NgxDatatableModule,
    SharedModule
  ],
  entryComponents: [ UsuarioComponent ],
  providers: [UsuarioService],
  declarations: [ ListaUsuarioComponent, UsuarioComponent, EditarComponent ]
})
export class UsuarioModule { }
