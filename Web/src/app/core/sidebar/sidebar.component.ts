import { Component, OnInit,EventEmitter,Output  } from '@angular/core';

@Component({
  selector: 'chr-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() cerrarEvent :EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  inicio() {
    console.log('Inicio');
  }

  cerrar() {
    this.cerrarEvent.emit('cerrar');
  }
}
