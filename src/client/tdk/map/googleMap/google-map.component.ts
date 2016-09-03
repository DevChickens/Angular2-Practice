import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { TdkGoogleMap, TdkGoogleMapMarker, TdkGoogleMapCircle, TdkGoogleMapPolyline } from './mapType/index';
import { GoogleMapControlComponent } from './index';
import { LatLng } from './type/index';
import { TravelModeType } from './mapType/index';

import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { GoogleDirectionsAPIManager } from './manager/directions-api-manager';

@Component({
  moduleId: module.id,
  selector: 'tdk-google-map',
  templateUrl: 'google-map.component.html',
  styles: [`
    .sebm-google-map-container {
      height: inherit;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleMapComponent {
  /*
    map config 설정 값
  */
  @Input()
  tdkGoogleMap: TdkGoogleMap;

  /*
    map 높이 설정 값
  */
  @Input()
  mapHeight: number = 300;

  @ViewChild('mapControl')
  mapControl: GoogleMapControlComponent;

  _map: Promise<GoogleMapsAPIWrapper>;
  _direction: GoogleDirectionsAPIManager;

  // map emiiter
  @Output() mapClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() mapRightClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() mapDblClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() mapCenterChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() mapZoomChange: EventEmitter<any> = new EventEmitter<any>();

  // map marker emiiter
  @Output() markerClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() markerDragEnd: EventEmitter<any> = new EventEmitter<any>();

  // map marker infoWindow emiiter
  @Output() markerInfoWindowClose: EventEmitter<any> = new EventEmitter<any>();

  // map circle emitter
  @Output() circleCenterChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() circleClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() circleDblClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() circleDrag: EventEmitter<any> = new EventEmitter<any>();
  @Output() circleDragStart: EventEmitter<any> = new EventEmitter<any>();
  @Output() circleDragEnd: EventEmitter<any> = new EventEmitter<any>();
  @Output() circleMouseDown: EventEmitter<any> = new EventEmitter<any>();
  @Output() circleMouseMove: EventEmitter<any> = new EventEmitter<any>();
  @Output() circleMouseOut: EventEmitter<any> = new EventEmitter<any>();
  @Output() circleMouseOver: EventEmitter<any> = new EventEmitter<any>();
  @Output() circleMouseUp: EventEmitter<any> = new EventEmitter<any>();
  @Output() circleRadiusChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() circleRightClick: EventEmitter<any> = new EventEmitter<any>();

  // map polyline emitter
  @Output() lineClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() lineDblClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() lineRightClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() lineDrag: EventEmitter<any> = new EventEmitter<any>();
  @Output() lineDragStart: EventEmitter<any> = new EventEmitter<any>();
  @Output() lineDragEnd: EventEmitter<any> = new EventEmitter<any>();

  // map polyline point emitter
  @Output() pointPositionChanged: EventEmitter<any> = new EventEmitter<any>();

  /*
    map 초기화시 실행(control 컴포넌트에서 emit)
  */
  mapLoaded(result: any) {
    this._map = result.map;
    this._direction = result.direction;

    if(this.tdkGoogleMap.direction !== undefined) {
      let direction = this.tdkGoogleMap.direction;
      this.route(direction.origin, direction.destination, direction.travelMode);
    }
  }

  /*
    해당 좌표를 중앙으로 오도록 animation 하면서 이동
  */
  panTo(lat: number, lng: number): void {
    this._map.then((map: GoogleMapsAPIWrapper) => map.panTo({ lat: lat, lng: lng }));
  }

  /*
    줌 레벨 설정
  */
  setZoom(zoom: number): void {
    this._map.then((map: GoogleMapsAPIWrapper) => map.setZoom(zoom));
  }

  /*
    여행경로 그려주기
    1. origin 에서 destination 으로 여행경로 그려줌.
    2. origin, destination 마커 생성
    3. origin, destination 보기 편하게 zoom 해주고 map center 해줌
  */
  route(origin: LatLng|string, destination: LatLng|string, travelMode: TravelModeType = 'DRIVING') {
    let originText = '';
    let destinationText = '';

    if(typeof origin === 'LatLng') {
      originText = (<LatLng>origin).lat + ',' + (<LatLng>origin).lng;
      destinationText = (<LatLng>destination).lat + ',' + (<LatLng>destination).lng;
    } else {
      originText = (<string>origin);
      destinationText = (<string>destination);
    }

    this._direction.route(originText, destinationText, travelMode);
  }

  /*
    해당 좌표를 중앙으로 map 을 이동시켜줌.(no animation)
    - animation 있는 것으로 하려면 panTo 사용하세요.
  */
  setCenter(lat: number, lng: number): Promise<void> {
    return this._map.then((map: GoogleMapsAPIWrapper) => map.setCenter({ lat: lat, lng: lng }));
  }

/********************** 이하 이벤트 에미터 *************************************/
  onMapClick(e: any) {
    this.mapClick.emit({
      coords: e.coords
    });
  }

  onMapRightClick(e: any) {
    this.mapRightClick.emit({
      coords: e.coords
    });
  }

  onMapDblClick(e: any) {
    this.mapDblClick.emit({
      coords: e.coords
    });
  }

  onMapCenterChange(e: any) {
    this.mapCenterChange.emit({
      coords: e
    });
  }

  onMapZoomChange(e: any) {
    this.mapZoomChange.emit({
      level: e
    });
  }

  onMarkerClick(marker: TdkGoogleMapMarker) {
    this.markerClick.emit({
      marker: marker
    });
  }

  onMarkerDragEnd(e: any, marker: TdkGoogleMapMarker) {
    this.markerDragEnd.emit({
      coords: e.coords,
      marker: marker
    });
  }

  onMarkerInfoWindowClose(e: any, marker: TdkGoogleMapMarker) {
    this.markerInfoWindowClose.emit({
      marker: marker
    });
  }


  onCircleCenterChange(e: any, circle: TdkGoogleMapCircle) {
    this.circleCenterChange.emit({
      coords: e,
      circle: circle
    });
  }

  onCircleClick(e: any, circle: TdkGoogleMapCircle) {
    this.circleClick.emit({
      coords: e.coords,
      circle: circle
    });
  }

  onCircleDblClick(e: any, circle: TdkGoogleMapCircle) {
    this.circleDblClick.emit({
      coords: e.coords,
      circle: circle
    });
  }

  onCircleRightClick(e: any, circle: TdkGoogleMapCircle) {
    this.circleRightClick.emit({
      coords: e.coords,
      circle: circle
    });
  }

  onCircleDrag(e: any, circle: TdkGoogleMapCircle) {
    this.circleDrag.emit({
      coords: e.coords,
      circle: circle
    });
  }

  onCircleDragStart(e: any, circle: TdkGoogleMapCircle) {
    this.circleDragStart.emit({
      coords: e.coords,
      circle: circle
    });
  }

  onCircleDragEnd(e: any, circle: TdkGoogleMapCircle) {
    this.circleDragEnd.emit({
      coords: e.coords,
      circle: circle
    });
  }

  onCircleMouseDown(e: any, circle: TdkGoogleMapCircle) {
    this.circleMouseDown.emit({
      coords: e.coords,
      circle: circle
    });
  }

  onCircleMouseMove(e: any, circle: TdkGoogleMapCircle) {
    this.circleMouseMove.emit({
      coords: e.coords,
      circle: circle
    });
  }

  onCircleMouseOut(e: any, circle: TdkGoogleMapCircle) {
    this.circleMouseOut.emit({
      coords: e.coords,
      circle: circle
    });
  }

  onCircleMouseOver(e: any, circle: TdkGoogleMapCircle) {
    this.circleMouseOver.emit({
      coords: e.coords,
      circle: circle
    });
  }

  onCircleMouseUp(e: any, circle: TdkGoogleMapCircle) {
    this.circleMouseUp.emit({
      coords: e.coords,
      circle: circle
    });
  }

  onCircleRadiusChange(e: any, circle: TdkGoogleMapCircle) {
    this.circleRadiusChange.emit({
      radius: e,
      circle: circle
    });
  }

  onLineClick(e: any, polyline: TdkGoogleMapPolyline) {
    this.lineClick.emit({
      event: e,
      polyline: polyline
    });
  }

  onLineDblClick(e: any, polyline: TdkGoogleMapPolyline) {
    this.lineDblClick.emit({
      event: e,
      polyline: polyline
    });
  }

  onLineRightClick(e: any, polyline: TdkGoogleMapPolyline) {
    this.lineRightClick.emit({
      event: e,
      polyline: polyline
    });
  }

  onLineDrag(e: any, polyline: TdkGoogleMapPolyline) {
    this.lineDrag.emit({
      coords: e.coords,
      polyline: polyline
    });
  }

  onLineDragStart(e: any, polyline: TdkGoogleMapPolyline) {
    this.lineDragStart.emit({
      coords: e.coords,
      polyline: polyline
    });
  }

  onLineDragEnd(e: any, polyline: TdkGoogleMapPolyline) {
    this.lineDragEnd.emit({
      coords: e.coords,
      polyline: polyline
    });
  }

  onPointPositionChanged(e: any) {
    this.pointPositionChanged.emit({
      event: e
    });
  }
}
