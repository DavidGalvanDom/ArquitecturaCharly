import { Component, Input } from '@angular/core';

import { Errors } from '../models';

@Component({
  selector: 'chr-lista-errores',
  templateUrl: './lista-errores.component.html',
  styleUrls: ['./lista-errores.component.scss']
})
export class ListaErroresComponent {

  constructor() { }

  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = [];

    if (errorList.errors) {
      for (const field in errorList.errors) {
        this.formattedErrors.push(`${field} ${errorList.errors[field]}`);
      }
    }
  };

  get errorList() { return this.formattedErrors; }

}
