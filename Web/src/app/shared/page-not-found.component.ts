import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chr-page-not-found',
  template: `
    <div class="container">
      <div> <br/><br/></div>
      <div class="row justify-content-md-center">
      <div class="col-6">
          <img src="./assets/logo.png" width="193" height="83">
      </div>
      <div class="col-6">
            <h1 class="no-toc" id="page-not-found">
              Page Not Found</h1>
            <p>We're sorry. The page you are looking for cannot be found.</p>
      </div>
    </div>
    </div>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
