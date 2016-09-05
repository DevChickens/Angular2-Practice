import { Route } from '@angular/router';

export const VocaMobileRoutes: Route[] = [
  {
    path: 'VocaMobile',
    loadChildren: '/app/+vocamobile/vocamobile.module'
  }
];
