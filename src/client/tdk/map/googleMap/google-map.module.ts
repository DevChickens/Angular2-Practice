import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapComponent } from './google-map.component';
import { GoogleMapControlComponent } from './google-map-control.component';
import { GoogleDirectionsAPIManager } from './manager/directions-api-manager';

import { AgmCoreModule } from 'angular2-google-maps/core';

export * from './index';
export * from './type/index';


/*
  angular2-google-maps 를 랩핑한 google map의 provider 입니다.
  directionsAPIManager 는 추가 개발하였음
*/
/** 이 모듈을 쓰는 곳에서 아래의 provide를 명시해야함.*/
// provide(LazyMapsAPILoaderConfig, { useFactory: () => {
//   let config = new LazyMapsAPILoaderConfig();
//   // 테스트용으로 발급 -도연
//   config.apiKey = 'AIzaSyAjxgxEyTkkSArKxWXdqNinrQ5tBsVX5Co';
//   return config;
// }}),

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot()
  ],
  declarations: [
    GoogleMapComponent,
    GoogleMapControlComponent
  ],
  exports: [
    GoogleMapComponent,
    GoogleMapControlComponent
  ]
})
export class GoogleMapModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GoogleMapModule,
      providers: [
        GoogleDirectionsAPIManager
      ]
    };
  }
}
