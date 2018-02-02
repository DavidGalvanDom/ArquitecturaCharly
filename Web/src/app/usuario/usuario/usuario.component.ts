import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Errors } from '../../shared/index';
import { Usuario } from '../../shared/models/usuario.model';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'chr-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  errors: Errors = {errors: {}};
  public usuarioForm: FormGroup;
  usuario: Usuario = { idUsuario: 0};

  constructor(public activeModal: NgbActiveModal,
              public usuarioService: UsuarioService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      nombreUsuario: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.maxLength(25)]],
      direccion: ['', [Validators.maxLength(50)]]
    });
  }

  guardar() {
    let nuevoUsuario = Object.assign({}, this.usuario, this.usuarioForm.value);
    this.usuarioService.guardarUsuario(nuevoUsuario).subscribe(
      respuesta => {
        console.log(respuesta);
        this.activeModal.close({ status:"Ok", usuario: nuevoUsuario});
      },
      error =>  this.despliegaError(error) );
  }

  private despliegaError(error: any) {
    this.errors = { errors: {}};
    if(error.status === 404) {
      this.errors = { errors: {"Descripcion: ": " No se encontro informacion."}};
    } else {
      this.errors = { errors: {"Descripcion: ": " Server error " + error}};
    }
  }
}
