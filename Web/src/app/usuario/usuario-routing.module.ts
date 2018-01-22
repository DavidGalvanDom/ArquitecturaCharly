import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { AuthGuardService } from '../shared/auth-guard.service';

const routes: Routes = [
  { path: 'usuario',  component: ListaUsuarioComponent, canActivate: [AuthGuardService]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
