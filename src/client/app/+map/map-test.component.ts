import { Component, ViewChild, OnInit } from '@angular/core';
import { TdkGoogleMap } from '../../tdk/map/googleMap/mapType/index';
import { GoogleMapComponent } from '../../tdk/map/googleMap/index';

@Component({
  selector: 'my-test-map',
  template: `
    <div>
      <div>
        <tdk-google-map
         #myMap
          [tdkGoogleMap]="mapConfig"
          [mapHeight]="mapHeight"
          (mapClick)="onMapClick($event)"
          (mapZoomChange)="onMapZoomChange($event)"
          (mapCenterChange)="onMapCenterChange($event)"
          (markerClick)="onMarkerClick($event)"
          (markerDragEnd)="onMarkerDragEnd($event)"
          (markerInfoWindowClose)="onMarkerInfoWindowClose($event)"
          (circleCenterChange)="onCircleCenterChange($event)"
          (circleClick)="onCircleClick($event)"
          (circleDrag)="onCircleDrag($event)"
          (circleDragStart)="onCircleDragStart($event)"
          (circleDragEnd)="onCircleDragEnd($event)"
          (circleMouseDown)="onCircleMouseDown($event)"
          (circleRadiusChange)="onCircleRadiusChange($event)">
        </tdk-google-map>
      </div>
      <div>
        <button (click)="onPanTo()">PanTo</button>
        <button (click)="onSetZoom()">SetZoom</button>
        <button (click)="onSetCenter()">SetCenter</button>
        <button (click)="onRoute()">chiago => los angeles</button>
      </div>
    </div>
  `
})
export class MapTestComponent implements OnInit {
  @ViewChild('myMap')
  myMap: GoogleMapComponent;

  mapHeight: number = 350;
  mapConfig: TdkGoogleMap = {
    latitude: 37.484343,
    longitude: 127.017247,
    disableDefaultUI: false,
    zoom: 13,
    infoWindows: [
      {
        latitude: 37.484343,
        longitude: 127.017247,
        text: 'map 하위 infoWindow'
      }
    ],
    markers: [
      {
        latitude: 37.484045,
        longitude: 127.010247,
        title: 'doyeon',
        label: 'A'
      },
      {
        latitude: 37.485977,
        longitude: 127.041086,
        markerId: 'travelhow',
        title: 'KK',
        label: 'C',
        iconUrl: 'http://icons.iconarchive.com/icons/pokemon-factory/pokemon-1/32/006-icon.png',
        opacity: 0.7,
        draggable: true,
        openInfoWindow: true,
        infoWindow: {
          text: '헤헤헿'
        }
      }
    ],
    circles: [
      {
        latitude: 37.487526,
        longitude: 127.025642,
        radius: 500,
        circleId: 'myCircle',
        draggable: true,
        // editable: true,
        fillColor: 'red',
        strokeColor: 'red',
        strokeOpacity: 0.5,
        strokeWeight: 0.5
      },
      {
        latitude: 37.58669819928302,
        longitude: 126.93659266070563,
        radius: 100,
        circleId: 'yohan house',
        fillColor: 'blue',
        strokeColor: 'blue'
      }
    ],
    polylines: [
      {
        draggable: true,
        editable: true,
        strokeColor: 'red',
        strokeWeight: 2,
        strokeOpacity: 0.5,
        points: [
          {
            latitude: 37.47049847079873,
            longitude: 127.01208114624023
          },
          {
            latitude: 37.479081218703634,
            longitude: 127.04967498779297
          }
        ]
      }
    ],
    direction: {
      origin: {
        lat: 37.7683909618184,
        lng: -122.51089453697205
      },
      destination: {
        lat: 41.850033,
        lng: -87.6500523
      }
      // origin: 'chicago, il',
      // destination: 'los angeles, ca'
    }
  };

  onPanTo() {
    this.myMap.panTo(37.479081218703634, 127.04967498779297);
  }
  onSetZoom() {
    this.myMap.setZoom(1);
  }

  onSetCenter() {
    this.myMap.setCenter(37.4865224350626, 127.04967498779297);
  }

  onRoute() {
    this.myMap.route('chicago, il', 'los angeles, ca');
  }

  onMapClick(e: any) {
    console.log('map is clicked');
    console.log(e);
  }

  onMapZoomChange(e: any) {
    console.log('zoom level is changed /  ' + e.level);
  }

  onMapCenterChange(e: any) {
    console.log('center is changed / ' + e.coords.lat + ' and ' + e.coords.lng);
  }

  onMarkerClick(e: any) {
    console.log('marker click / ');
  }

  onMarkerDragEnd(e: any) {
    console.log('drag is end / ' + e.marker.markerId);
  }

  onMarkerInfoWindowClose(e: any) {
    console.log('marker window is closed / ' + e.marker.markerId);
  }

  onCircleCenterChange(e: any) {
    console.log('circle center is changed / ' + e.circle.circleId);
  }

  onCircleClick(e: any) {
    console.log('circle click event / ' + e.circle.circleId);
  }

  onCircleDblClick(e: any) {
    console.log('circle dbl click event / ' + e.circle.circleId);
  }

  onCircleDrag(e: any) {
    console.log('circle drag event / ' + e.circle.circleId);
  }

  onCircleDragEnd(e: any) {
    console.log('circle drag end event / ' + e.circle.circleId);
  }

  onCircleDragStart(e: any) {
    console.log('circle drag start event / ' + e.circle.circleId);
  }

  onCircleMouseDown(e: any) {
    console.log('circle mouse down event / ' + e.circle.circleId);
  }

  onCircleRadiusChange(e: any) {
    console.log('circle radius is changed / ' + e.radius + ' / ' + e.circle.circleId);
  }

  ngOnInit() {
    console.log('init map test component');
    console.log(this.mapConfig);
  }
}
