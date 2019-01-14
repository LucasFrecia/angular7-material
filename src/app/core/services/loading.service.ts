import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class LoadingService {
  isLoading: boolean;
  loadingChange$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loadingChange$.next(false);
  }

  /**
   * Use to show or hide loading bar on header
   * @data type: boolean
   */
  changeLoadingStatus(data: boolean) {
    this.isLoading = data;
    this.loadingChange$.next(this.isLoading);
  }
}
