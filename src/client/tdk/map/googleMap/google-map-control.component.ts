import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { GoogleDirectionsAPIManager } from './manager/directions-api-manager';

/*
  google map api 글로벌 객체 가져오기

  - direction api 의 경우 구현되어 있지 않기 때문에
    DirectionsManager 를 직접 customize 함
*/
declare var google: any;

@Component({
  selector: 'tdk-google-map-control',
  template: ``
})
export class GoogleMapControlComponent implements OnInit {
  @Output() mapLoaded = new EventEmitter();

  constructor(
    private _wrapper: GoogleMapsAPIWrapper,
    private _direction: GoogleDirectionsAPIManager) { }

  ngOnInit() {
    this._wrapper.getNativeMap().then((m: any) => {
      // directions Api 초기화
      this._direction.initializeDirectionAPI(google, this._wrapper.getNativeMap());

      this.mapLoaded.emit({
        map: this._wrapper.getNativeMap(),
        direction: this._direction
      });
    });
  }
}
