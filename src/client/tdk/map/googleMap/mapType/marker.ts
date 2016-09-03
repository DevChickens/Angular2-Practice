import { TdkGoogleMapInfoWindow } from './index';

/*
  **********************************************
    map 안에 포함 될 marker 를 설정합니다
  **********************************************
*/
export interface TdkGoogleMapMarker {
  /*
    marker 의 위도를 설정합니다. (필수)
  */
  latitude: number;                   // 위도 (필수)

  /*
    marker 의 경도를 설정합니다. (필수)
  */
  longitude: number;                   // 경도 (필수)

  /*
    marker 의 드래그 가능 여부를 설정합니다.
  */
  draggable?: boolean;

  /*
    marker 의 아이디를 설정합니다.
  */
  markerId?: string;

  /*
    marker 의 제목을 설정합니다
  */
  title?: string;

  /*
    default marker 핀(img) 의 표시될 글자를 설정합니다.
    - 무조건 한글자 대문자 가능
  */
  label?: string;

  /*
    default marker 핀(img) 대신 표현 될 img url 를 설정합니다.
  */
  iconUrl?: string;

  /*
    marker 를 표시 할지 말지 설정합니다.
  */
  visible?: boolean;

  /*
    marker 를 클릭 시 infowWindow 를 표시 할지 말지 설정합니다.
    - true 시 marker 하위의 infoWindow 를 설정해야함.
  */
  openInfoWindow?: boolean;

  /*
    marker 투명도를 설정합니다.
    - 투명도 범위는 0 ~ 1 사이의 소수점
  */
  opacity?: number;

  /*
    marker 의 zIndex 를 설정합니다.
  */
  zIndex?: number;

  /*
    marker 가 클릭 되었을 때 표시할 infoWindow 를 설정합니다.
    - openInfoWindow true 로 설정되어야 보여집니다.
  */
  infoWindow?: TdkGoogleMapInfoWindow;
}
