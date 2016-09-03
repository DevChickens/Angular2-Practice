import { Route } from '@angular/router';

export const NumberPickerTestRoutes: Route[] = [
  {
    path: 'numberpicker',
    loadChildren: '/app/+numberpicker/numberpicker-test.module'
  }
];
