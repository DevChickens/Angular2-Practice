/**
 * Created by mayajuni on 2016-08-16.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ModalService {
  isOpened: boolean = false;
  public modal$: Subject<any>;

  constructor() {
    this.modal$ = new Subject();
    this.modal$.next(this.isOpened);
  }

  closeAll() {
    this.isOpened = false;
    this.modal$.next(this.isOpened);
  }
}
