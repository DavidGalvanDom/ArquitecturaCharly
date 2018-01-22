import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutenticacionComponent } from './autenticacion/autenticacion.component';

const routes: Routes = [
  { path: 'login',  component: AutenticacionComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }
