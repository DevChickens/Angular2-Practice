/**
 * Created by mayajuni on 2016-08-16.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.sevice';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent],
  exports: [ModalComponent]
})
export class ModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [ModalService]
    };
  }
}
