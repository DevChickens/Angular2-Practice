/**
 * Bootstraps the application and makes the ROUTER_PROVIDERS and the APP_BASE_HREF available to it.
 * @see https://angular.io/docs/ts/latest/api/platform-browser-dynamic/index/bootstrap-function.html
 */

// The browser platform with a compiler
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
import { enableProdMode } from '@angular/core';

if (String('<%= ENV %>') === 'prod') { enableProdMode(); }

// The app module

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule).then((appRef) => {
  console.log('traportModule Injector is', appRef.injector);
});

// In order to start the Service Worker located at './worker.js'
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
//
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('./worker.js').then((registration: any) =>
//       console.log('ServiceWorker registration successful with scope: ', registration.scope))
//     .catch((err: any) =>
//       console.log('ServiceWorker registration failed: ', err));
// }
