
/*
  **********************************************
    polyline 에 포함될 point 를 설정합니다.
  **********************************************
*/
export interface TdkGoogleMapPolylinePoint {

  /*
    point 의 위도를 설정합니다. (필수)
  */
  latitude: number;

  /*
    point 의 경도를 설정합니다. (필수)
  */
  longitude: number;
}
