import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { ListaErroresComponent } from './lista-errores/lista-errores.component';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UsuarioService } from './service/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [PageNotFoundComponent, ListaErroresComponent],
  exports: [  
    CommonModule,
    NgbModule,
    ListaErroresComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [ AuthService, AuthGuardService, UsuarioService ]
})
export class SharedModule { }
