import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors } from '../../shared';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'chr-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.scss']
})
export class AutenticacionComponent implements OnInit {

  authType: String = '';
  title: String = '';
  errors: Errors = new Errors();
  isSubmitting = false;
  authForm: FormGroup;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder) { 

      // use FormBuilder to create a form group
      this.authForm = this.fb.group({
        'usuario': ['', Validators.required],
        'contrasena': ['', Validators.required]
      });

  }

  ngOnInit() {
    this.auth.logOut(); 
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = new Errors();

    const credentials = this.authForm.value;

    console.log(credentials);
    this.auth.redirectUrl = this.auth.redirectUrl === "login" ? "inicio": this.auth.redirectUrl;
    this.auth.loggedIn(true,"mytoken","1",this.authForm.get('usuario').value);
    this.router.navigate([this.auth.redirectUrl]);
    
   /* this.userService
    .attemptAuth(this.authType, credentials)
    .subscribe(
      data => this.router.navigateByUrl('/'),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );*/
  }

}
