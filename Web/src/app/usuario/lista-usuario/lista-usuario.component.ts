import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../../shared/service/usuario.service';
import { Errors, Usuario } from '../../shared';
import { EditarComponent } from '../editar/editar.component';
import { MensajeComponent } from '../../shared/mensaje/mensaje.component';

//http://swimlane.github.io/ngx-datatable/

@Component({
  selector: 'chr-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {
  errors: Errors = new Errors();

  ngOnInit() {
  }

  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  constructor(private modalService: NgbModal,
              private usuarioService: UsuarioService) {
      this.loadUsuarios();
  }

  nuevo(){
    const nuevoUsuModal = this.modalService.open(UsuarioComponent);
    nuevoUsuModal.result.then((result) => {
     
      if(result.status === "Ok"){
        this.AgregarNuevoUsuario(result.usuario);
      }
    }, (reason) => {
      console.log(reason);
    });
  }

  editar(row: any) {
    const editUsuModal = this.modalService.open(EditarComponent);
    editUsuModal.componentInstance.cargaUsuario(row);

    editUsuModal.result.then((result) => {
     
      if(result.status === "Ok"){
        this.ActualizaUsuario(result.usuario);
      }
    }, (reason) => {
      console.log(reason);
    });
  }

  borrar(row: any) {

    const msgModal = this.modalService.open(MensajeComponent);
    msgModal.componentInstance.mensaje=" Esta seguro que desea borrar el usuario? " + row.nombreUsuario;

    //console.log(row);
  }

  private loadUsuarios() {
    this.usuarioService.get().
      subscribe( 
        data => {
          this.rows = data;
          console.log(this.rows);
        } ,
        (error: any) => this.errors = <any>error);
  }

  private AgregarNuevoUsuario(nuevoUsuario: Usuario) {
    this.rows = [...this.rows, nuevoUsuario];
  }

  private ActualizaUsuario(editarUsuario: Usuario) {
    this.rows = [...this.rows, editarUsuario];
  }
}
