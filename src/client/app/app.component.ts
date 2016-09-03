import { Component } from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor() {
    console.log('Environment config');
  }
}
