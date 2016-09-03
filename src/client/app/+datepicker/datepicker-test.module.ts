import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerTestComponent } from './datepicker-test.component';
import { RouterModule } from '@angular/router';

import { DatepickerModule } from '../../tdk/datepicker/datepicker.module';

export const routerConfig = [{
  path: '',
  component: DatepickerTestComponent
}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routerConfig), DatepickerModule],
  declarations: [DatepickerTestComponent],
  exports: [DatepickerTestComponent]
})
export default class DatepickerTestModule { }
