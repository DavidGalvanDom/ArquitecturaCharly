import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'chr-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  name: string= " David Galvan ";

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

  guardar() {
    console.log('guardar');
  }
}
