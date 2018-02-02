import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Errors, Usuario } from '../../shared/index';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'chr-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  errors: Errors = {errors: {}};
  usuario: Usuario = { idUsuario: 0};
  public usuarioForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder) {}

  ngOnInit() {
   
  }

  actualizar() {
   console.log('Actuliza');
  }

  cargaUsuario(editarUsuario: Usuario) {
    this.usuario = editarUsuario;
    if(this.usuarioForm === undefined) {
      this.iniciaForm();
    }

    this.usuarioForm.patchValue({
      idUsuario: this.usuario.idUsuario,
      nombreUsuario: this.usuario.nombreUsuario,
      correo: this.usuario.correo,
      direccion: this.usuario.direccion
    });
  }

  private iniciaForm() {
    this.usuarioForm = this.fb.group({
      idUsuario: [0, [Validators.required]],
      nombreUsuario: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.maxLength(25)]],
      direccion: ['', [Validators.maxLength(50)]]
    });
  }

}

