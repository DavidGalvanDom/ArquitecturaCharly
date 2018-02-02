import { Component, OnInit,EventEmitter,Output  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'chr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() menuEvent :EventEmitter<any> = new EventEmitter();
  @Output() salirEvent :EventEmitter<any> = new EventEmitter();

  constructor(public router: Router) { }

  ngOnInit() {
  }

  salir() {
    this.salirEvent.emit('salir');
    this.router.navigate(["login"]);
  }

  menu() {
    this.menuEvent.emit('menu');
  }

}
