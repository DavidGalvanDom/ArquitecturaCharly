import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found.component';
import { InicioComponent } from './core/inicio/inicio.component';
import { AuthGuardService } from './shared/auth-guard.service';

const routes: Routes = [
  { path: 'inicio',  component: InicioComponent,  canActivate: [AuthGuardService] },
  { path: '', redirectTo: 'inicio',  pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
