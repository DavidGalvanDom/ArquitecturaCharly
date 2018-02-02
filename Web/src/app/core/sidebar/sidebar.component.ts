import { Component, OnInit,EventEmitter,Output  } from '@angular/core';
import { Router } from '@angular/router';

import { ModuloService } from '../../shared/service/modulo.service';
import { Modulo } from '../../shared/models/modulo.model';

@Component({
  selector: 'chr-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public modulos: Modulo[] = [];
  
  @Output() cerrarEvent :EventEmitter<any> = new EventEmitter();

  constructor(private router: Router,
             private modulService: ModuloService) { }

  ngOnInit() {
    this.modulService.obtenerModulos().
    subscribe( data => {
      console.log(data);
      this.modulos = data
    } );
  }

  inicio() {
    console.log('Inicio');
  }

  cerrar() {
    this.cerrarEvent.emit('cerrar');
  }
}
