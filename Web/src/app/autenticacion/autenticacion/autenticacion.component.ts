import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors } from '../../shared';
import { AuthService } from '../../shared/service/auth.service';
import { AutentificacionService } from '../shared/autentificacion.service';

@Component({
  selector: 'chr-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.scss']
})
export class AutenticacionComponent implements OnInit {

  title: String = '';
  errors: Errors = {errors: {}};
  isSubmitting = false;
  authForm: FormGroup;

  constructor( private route: ActivatedRoute,
    private usuarioService: AutentificacionService,
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder) { 

      // use FormBuilder to create a form group
      this.authForm = this.fb.group({
        'usuario': ['', Validators.required],
        'contrasena': ['', Validators.required]
      });

  }

  ngOnInit() {
    this.auth.logOut(); 
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};
    const credentials = this.authForm.value;

    this.usuarioService.loginUser(credentials)
                        .subscribe(
                          data => { this.userAutorizacion(data); },
                          err => {
                            this.MensajeError(err);
                            this.isSubmitting = false;
                          }
                        );
  }

  private userAutorizacion(data: any) {
    if(data.access_token != null) {
      this.auth.redirectUrl = this.auth.redirectUrl === "login" ? "inicio": this.auth.redirectUrl;
      this.auth.loggedIn(true,data.access_token,"1",this.authForm.get('usuario').value);
      this.router.navigate([this.auth.redirectUrl]);
    } else { 
      this.errors = {errors: {"Descripcion: ": "Usuario o contraseña incorrectos"}};
      this.isSubmitting = false;
    }
  }

  private MensajeError(err: any) {
    if(err.error === "invalid_grant") {
      this.errors = {errors: {"Descripcion: ": "Usuario o contraseña incorrectos."}};
    } else {
      this.errors = {errors: {"Descripcion: ": "Error al conectarse con el servidor"}};
    }
  }
}
