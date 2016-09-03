/* 테스트 */
import { Routes } from '@angular/router';
import { HomeRoutes } from './+home/index';
import { DatepickerTestRoutes } from './+datepicker/datepicker-test.routes';
import { SliderTestRoutes } from './+slider/index';
import { NumberPickerTestRoutes } from './+numberpicker/index';
import { MapTestRoutes } from './+map/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...SliderTestRoutes,
  ...NumberPickerTestRoutes,
  ...MapTestRoutes,
  ...DatepickerTestRoutes
];
