/**
 * Created by mayajuni on 2016-08-16.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from './modal.sevice';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  selector: 'tdk-modal',
  template: `
  <div class="modal" [class.active]='isOpened'>
    <ng-content></ng-content>
  </div>
  `,
  styles: [`
    .modal {
      display: none;
    }

    .modal.active {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.2);
      z-index: 99999;
    }
  `],
})

export class ModalComponent implements OnInit {
  isOpened: boolean = false;
  modal$: Observable<boolean>;

  constructor(private _modalService: ModalService) {}

  ngOnInit() {
    this.modal$ = this._modalService.modal$;
    this.modal$.subscribe(isOpened => this.isOpened = isOpened);
  }

  open() {
    this.isOpened = true;
  }

  close() {
    this.isOpened = false;
  }
}
