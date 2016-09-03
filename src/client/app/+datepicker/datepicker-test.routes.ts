import { Route } from '@angular/router';

export const DatepickerTestRoutes: Route[] = [
  {
    path: 'datepicker',
    loadChildren: '/app/+datepicker/datepicker-test.module'
  }
];
