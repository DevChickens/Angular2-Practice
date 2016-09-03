import {
  TdkGoogleMapMarker,
  TdkGoogleMapCircle,
  TdkGoogleMapInfoWindow,
  TdkGoogleMapPolyline,
  TdkGoogleMapDirection
} from './index';

/**
  **********************************************
      GoogleMap 의 config 모델을 정의합니다.
  **********************************************
  - map 의 기본적인 설정 가능
  - map 안에 포함될 marker, circle, polyline, infoWindow, direction 등록 가능
**/
export interface TdkGoogleMap {
  /*
    위도 (필수)
    - 로드 시 보여줄 위도를 설정합니다.
  */
  latitude: number;

  /*
    경도 (필수)
    - 로드 시 보여줄 경도를 설정합니다.
  */
  longitude: number;

  /*
    줌 레벨(기본 8)
    - 로드 시 보여줄 줌 레벨을 설정합니다.
  */
  zoom?: number;

  /*
    드래그 가능 여부
    - 맵을 드래그 가능하게 할 것인지 설정합니다.
  */
  draggable?: boolean;

  /*
    기본 UI 활성화 여부
    - 기본 UI 를 보여줄 것인지 설정합니다.
  */
  disableDefaultUI?: boolean;

  /*
    스크롤 휠 확대 여부
    - 마우스 휠로 확대가 가능하게 할 것인지 설정합니다.
  */
  scrollwheel?: boolean;

  /*
    더블 클릭 확대 가능 여부
    - 더블 클릭으로 확대가 가능하게 할 것인지 설정합니다.
  */
  disableDoubleClickZoom?: boolean;

  /*
    지도 로드 전에 보여줄 배경 색상(css)
    - 지도가 로딩되기전의 배경 타일 색상을 지정합니다.
    - ex. #AAA, blue, red
  */
  backgroundColor?: string;

  /*
    키보드 숏컷 활성화 여부
  */
  keyboardShortcuts?: boolean;

  /*
    줌 컨트롤 UI 활성화 여부
  */
  zoomControl?: boolean;

  /*
    위도, 경도 바뀌고 panTo 메서드 사용시 center 로 움직일 여부
  */
  usePanning?: boolean;

  /*
    스트리트뷰 컨트롤 UI 활성화 여부
  */
  streetViewControl?: boolean;

  /*
    맵 안에 포함 될 marker 배열
    - marker 의 자세한 내용은 TdkGoogleMapMarker 를 참조하세요.
  */
  markers?: TdkGoogleMapMarker[];

  /*
    맵 안에 포함 될 circle 배열
    - circle 의 자세한 내용은 TdkGoogleMapCircle 를 참조하세요.
  */
  circles?: TdkGoogleMapCircle[];

  /*
    맵 안에 포함 될 infowindow 배열
    - infoWindow 의 자세한 내용은 TdkGoogleMapInfoWindow 를 참조하세요.
  */
  infoWindows?: TdkGoogleMapInfoWindow[];

  /*
    맵 안에 포함 될 polyline 배열
    - polyline 의 자세한 내용은 TdkGoogleMapPolyline 를 참조하세요.
  */
  polylines?: TdkGoogleMapPolyline[];

  /*
    맵 초기화 후 그릴 direction 정보
    - direction 의 자세한 내용은 TdkGoogleMapDirection 를 참조하세요.
  */
  direction?: TdkGoogleMapDirection;
}
