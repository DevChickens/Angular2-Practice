import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalModule } from './../../tdk/modal/modal.module';
import { NgModule } from '@angular/core';

import { VocaMobileComponent } from './vocamobile.component';

const routerConfig = [{
  path: '',
  component: VocaMobileComponent
}];

@NgModule({
  imports: [CommonModule, ModalModule.forRoot(), RouterModule.forChild(routerConfig)],
  declarations: [VocaMobileComponent],
  exports: [VocaMobileComponent]
})
export default class VocaMobileModule { }
