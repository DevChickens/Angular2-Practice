import { LatLng } from '../type/index';
/*
  **********************************************
    map 초기화 후 그려줄 direction 을 설정합니다.
  **********************************************
*/
export interface TdkGoogleMapDirection {
  /*
    출발지를 입력합니다. (필수)
    - 지명 텍스트나 위도 경로를 입력할 수 있다
    - origin: { lat: 37.7683909618184, lng: -122.51089453697205 }
    - origin: 'chicago, il'
  */
  origin: LatLng|string;

  /*
    도착지를 설정합니다. (필수)
    - 지명 텍스트나 위도 경로를 입력할 수 있다
    - origin: { lat: 37.7683909618184, lng: -122.51089453697205 }
    - origin: 'chicago, il'
  */
  destination: LatLng|string;

  /*
    여행 모드를 설정합니다.(기본:DRIVING)
  */
  travelMode?: TravelModeType;
}

// travelMode 의 타입
export type TravelModeType = "DRIVING"|"BICYCLING"|"TRANSIT"|"WALKING";
