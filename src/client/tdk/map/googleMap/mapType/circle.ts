
/**
  **********************************************
    GoogleMap 의 포함될 Circle 을 정의합니다
  **********************************************
  - circle 의 설정
**/
export interface TdkGoogleMapCircle {
  /*
    위도 (필수)
    - circle 의 위도를 설정합니다.
  */
  latitude: number;

  /*
    경도 (필수)
    - circle 의 경도를 설정합니다.
  */
  longitude: number;

  /*
    반지름 (필수)
    - circle 의 반지름 크기를 설정합니다.
  */
  radius: number;

  /*
    circle Id
    - circle 의 Id 를 설정합니다.
  */
  circleId?: string;

  /*
    circle 안에 채울 색을 설정합니다
    - css 표현식으로 등록(ex. red, #aaa)
  */
  fillColor?: string;

  /*
    circle 의 색상 투명도를 설정합니다.
    - 0 ~ 1 사이의 소수점으로 표현
  */
  fillOpacity?: number;

  /*
    circle 을 클릭 가능 여부를 설정합니다.
  */
  clickable?: boolean;

  /*
    circle 을 드래그 가능하게 할 지 설정합니다.
  */
  draggable?: boolean;

  /*
    circle 을 수정 가능하게 할 지 설정합니다.
  */
  editable?: boolean;              // 수정 가능 여부

  /*
    circle 둘레의 선 색상을 설정합니다.
    - css 표현식으로 등록(ex. red, #aaa)
  */
  strokeColor?: string;

  /*
    circle 둘레의 선 투명도를 설정합니다
    - 0 ~ 1 의 소수점으로 표현
  */
  strokeOpacity?: number;

  /*
    circle 둘레의 선 위치를 설정합니다
  */
  strokePosition?: 'CENTER'|'INSIDE'|'OUTSIDE';

  /*
    circle 둘레의 선 두께를 설정합니다.
  */
  strokeWeight?: number;

  /*
    circle 을 보여줄 지 말지 설정합니다.
  */
  visible?: boolean;

  /*
    circle 의 zIndex 를 설정합니다.
  */
  zIndex?: number;
}
