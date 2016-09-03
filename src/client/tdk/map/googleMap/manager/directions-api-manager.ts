import { Injectable } from '@angular/core';
import { TravelModeType } from '../mapType/direction';

/**
  Google Directions API 매니저입니다.
**/
@Injectable()
export class GoogleDirectionsAPIManager {
  // google map native 전역 객체 가져온 것
  google: any;

  map: Promise<any>;

  directionsService: any;
  directionsDisplay: any;

  // google direction api 초기화
  initializeDirectionAPI(google: any, map: any) {
    this.google = google;
    this.map = map;

    map.then((m: any) => {
      this.directionsService = new google.maps.DirectionsService;
      this.directionsDisplay = new google.maps.DirectionsRenderer;
      this.directionsDisplay.setMap(m);
    });
  }

  /*
    시작점과 도착점을 넣으면 해당 경로가 그려지고 center 로 이동하게됨
    시작점과 도착점의 marker 도 그려준다
  */
  route(origin: string, destination: string, travelMode: TravelModeType) {
    this.map.then((m: any) => {
      var request = {
       origin: origin,
       destination: destination,
       travelMode: travelMode
      };

      this.directionsService.route(request, (result: any, status: any) => {
        if (status === this.google.maps.DirectionsStatus.OK) {
          this.directionsDisplay.setDirections(result);
        }
      });
    });
  }
}
