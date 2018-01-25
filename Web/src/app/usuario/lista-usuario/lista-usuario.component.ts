import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../shared/usuario.service'; 
import { Errors } from '../../shared';

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

  columns = [
    { prop: 'idUsuario' },
    { name: 'nombreUsuario' },
    { name: 'Correo', sortable: false },
    { name: 'Direccion', sortable: false }
  ];

  constructor(private modalService: NgbModal,
              private userService: UsuarioService) {
      this.loadUsuarios();
  }

  nuevo(){
    const modalRef = this.modalService.open(UsuarioComponent);
    modalRef.componentInstance.name = 'World';
  }

  private loadUsuarios() {
    this.userService.get().
      subscribe( 
        data => this.rows = data,
        (error: any) => this.errors = <any>error);
  }

}
