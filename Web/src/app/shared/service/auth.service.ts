import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  public isLoggedInUser: boolean = false;
  public redirectUrl: string = "\login";
  public userNameChange: Observable<string>;
  public dataUserName: any;

  constructor() { 
    this.userNameChange = Observable.create( item => this.dataUserName = item);
   }

  loggedIn(isLoggedIn: boolean, token: string, 
          idUsuario: string, userName: string) {
    this.isLoggedInUser = true;
    sessionStorage.setItem('idUsuairo',idUsuario);
    sessionStorage.setItem("token",token);
    sessionStorage.setItem("nombreUsuairo",userName);

    //this.dataUserName.next(userName);
  }

  logOut() {
    this.isLoggedInUser = false;
    sessionStorage.clear();
  }

  usuarioLogeado() {
    if (sessionStorage.getItem("token") === null) {
      this.isLoggedInUser = false;
      return false;
    } else {
     // this.dataUserName.next(sessionStorage.getItem ('nombreUsuairo'));
      this.isLoggedInUser = true;
      return true;
    }
  }

  getToken(): string {
    this.isLoggedInUser = sessionStorage.getItem("token") === null ? false: true;
    return sessionStorage.getItem("token");
  }

}
