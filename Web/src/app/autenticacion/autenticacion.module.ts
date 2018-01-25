import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { SharedModule } from '../shared/shared.module';
import { AutentificacionService } from './shared/autentificacion.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    AutenticacionRoutingModule
  ],
  providers: [AutentificacionService],
  declarations: [AutenticacionComponent]
})
export class AutenticacionModule { }
