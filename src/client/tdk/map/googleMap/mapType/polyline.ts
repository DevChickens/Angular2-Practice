import { TdkGoogleMapPolylinePoint } from './index';

/*
  **********************************************
    map 안에 포함될 polyline 을 설정합니다.
  **********************************************
*/
export interface TdkGoogleMapPolyline {

  /*
    polyline 의 id 를 설정합니다.
  */
  polylineId?: string;       // 아이디

  /*
    polyline 의 클릭 가능 여부를 설정합니다.
  */
  clickable?: boolean;      // 마우스 이벤트 동작 여부

  /*
    polyline 의 드래그 가능 여부를 설정합니다.
  */
  draggable?: boolean;      // 드래그 가능 여부

  /*
    polyline 의 변경 가능 여부를 설정합니다.
  */
  editable?: boolean;

  /*
    지구 곡면에 대한 굴절률 적용 여부를 설정합니다.
  */
  geodesic?: boolean;

  /*
    polyline 의 선 두께를 설정합니다.
  */
  strokeWeight?: number;

  /*
    polyline 의 선 색을 설정합니다.
    - css 표현식(ex. #aaa, red)
  */
  strokeColor?: string;

  /*
    polyline 의 선 투명도를 설정합니다.
    - 0 ~ 1 사이의 소수점
  */
  strokeOpacity?: number;

  /*
    polyline 을 보여줄지 말지 설정합니다.
  */
  visible?: boolean;

  /*
    polyline 의 zIndex 값을 설정합니다.
  */
  zIndex?: number;

  /*
    polyline 의 point 들을 설정합니다
    - polyline-point 참조하세요.
  */
  points: TdkGoogleMapPolylinePoint[]; // 포인트
}
