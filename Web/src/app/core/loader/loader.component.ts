import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

import { LoaderService } from './loader.service';
import { LoaderState } from './loader';

@Component({
  selector: 'chr-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public show: boolean = false;
  private subscription: Subscription;

  constructor(private loaderService: LoaderService,
              private slimLoadingBarService: SlimLoadingBarService) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
        
      if(state.show) {
        this.slimLoadingBarService.start();
      } else {
        this.slimLoadingBarService.complete();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
