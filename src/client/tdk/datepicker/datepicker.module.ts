import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DatepickerComponent],
  exports: [DatepickerComponent]
})
export class DatepickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DatepickerModule,
      providers: []
    };
  }
}
