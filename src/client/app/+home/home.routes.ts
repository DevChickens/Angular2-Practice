import { Route } from '@angular/router';

export const HomeRoutes: Route[] = [
  {
    path: '',
    loadChildren: '/app/+home/home.module'
  }
];
