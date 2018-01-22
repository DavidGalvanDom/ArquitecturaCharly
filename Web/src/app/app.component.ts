import { Component } from '@angular/core';

import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'chr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( public auth: AuthService) {}

  private _opened: boolean = false;
 
  private _toggleSidebar() {
    console.log('entro');
    this._opened = !this._opened;
  }

}
