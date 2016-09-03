import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../tdk/modal/modal.component';
import { ModalService } from '../../../tdk/modal/modal.sevice';

@Component({
  selector: 'sub-home',
  template: `
  <button (click)='test2()'>test</button>
  <button (click)='test()'>open</button>
  <tdk-modal #subModal>
    <button (click)='subModal.close()'>closeSubModal</button>
    <button (click)='test3()'>closeAllModal</button>
  </tdk-modal>
  `
})
export class SubHomeComponent {
  @Output() initData = new EventEmitter();
  @ViewChild('subModal') subModal: ModalComponent;

  constructor(private _modalService: ModalService) {}

  test2() {
    this.initData.emit('test');
  }

  test() {
    this.subModal.open();
  }

  test3() {
    this._modalService.closeAll();
  }
}
