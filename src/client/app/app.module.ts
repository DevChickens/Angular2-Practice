/**
 * Created by mayajuni on 2016-08-16.
 */
import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
import { routes } from './app.routes';
import { APP_SERVICE_PROVIDERS } from '../biz/service/index';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/head/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { APP_ACTION_PROVIDERS } from '../biz/redux/action';
import { APP_REDUCERS } from '../biz/redux/reducer';
import { StoreModule } from '@ngrx/store';
import { APP_QUERY_PROVIDERS } from '../biz/redux/query';
import { SliderModule } from '../tdk/slider/index';
import { SliderTestComponent } from './+slider/index';
import { TravelhowHammerConfig } from '../config/hammer.config';
import { GoogleMapModule } from '../tdk/map/googleMap/index';
// import { LazyMapsAPILoaderConfig } from 'angular2-google-maps/core';

/**
 * import all rxjs libraries
 */

// hammerjs

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(APP_REDUCERS),
    HttpModule,
    SliderModule.forRoot(),
    GoogleMapModule.forRoot()
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SliderTestComponent
  ],
  providers: [
    APP_SERVICE_PROVIDERS,
    APP_ACTION_PROVIDERS,
    APP_QUERY_PROVIDERS,
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    },
    // hammerJs
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: TravelhowHammerConfig
    }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
