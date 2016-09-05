import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalModule } from './../../tdk/modal/modal.module';
import { NgModule } from '@angular/core';

import { NumberPickerComponent } from './../../tdk/numberpicker/numberpicker.component';
import { NumberpickerTestComponent } from './numberpicker-test.component';

const routerConfig = [{
  path: '',
  component: NumberpickerTestComponent
}];

@NgModule({
  imports: [CommonModule, ModalModule.forRoot(), RouterModule.forChild(routerConfig)],
  declarations: [NumberpickerTestComponent, NumberPickerComponent],
  exports: [NumberpickerTestComponent]
})
export default class NumberPickerModule { }
