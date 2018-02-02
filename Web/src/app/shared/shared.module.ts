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
import { MensajeComponent } from './mensaje/mensaje.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [  
    CommonModule,
    NgbModule,
    ListaErroresComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MensajeComponent
  ],
  declarations: [PageNotFoundComponent, ListaErroresComponent, MensajeComponent],
  providers: [ AuthService, AuthGuardService, UsuarioService ]
})
export class SharedModule { }
