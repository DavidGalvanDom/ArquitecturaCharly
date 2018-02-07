import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Errors } from '../../shared/index';
import { Usuario } from '../../shared/models/usuario.model';
import { UsuarioService } from '../../shared/service/usuario.service';
import { CiudadService } from '../../shared/service/ciudad.service';
import { Ciudad } from '../../shared/models/ciudad.model';

@Component({
  selector: 'chr-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public errors: Errors = {errors: {}};
  public usuarioForm: FormGroup;
  public ciudades: Ciudad[] = [];
  public usuario: Usuario = { idUsuario: 0};

  constructor(public activeModal: NgbActiveModal,
              public usuarioService: UsuarioService,
              public ciudadService: CiudadService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      nombreUsuario: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.maxLength(25)]],
      ciudad: ['', [Validators.required]],
      direccion: ['', [Validators.maxLength(50)]]
    });

    this.ciudadService.get().subscribe( data => this.ciudades = data,
                                        error =>  this.despliegaError(error));
  }

  guardar() {
    let nuevoUsuario = Object.assign({}, this.usuario, this.usuarioForm.value);
    console.log(nuevoUsuario);
    this.usuarioService.guardarUsuario(nuevoUsuario).subscribe(
      respuesta => {
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
