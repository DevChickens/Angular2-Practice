
/*
  **********************************************
    Map 혹은 marker 에 포함 될 infoWindow 를 설정합니다.
  **********************************************
*/
export interface TdkGoogleMapInfoWindow {
  /*
    infoWindow 에 보여줄 텍스트를 설정합니다 (필수)
  */
  text: string;

  /*
    infoWindow 가 위치할 위도를 설정합니다 (map 하위로 쓸 시 필수)
  */
  latitude?: number;

  /*
    infoWindow 가 위치할 경도를 설정합니다. (map 하위로 쓸 시 필수)
  */
  longitude?: number;

  /*
    클릭 시 팬 이동을 설정합니다. => 동작 안하는듯?
  */
  disableAutoPan?: boolean;

  /*
    infoWindow 를 보여줄 지 말지 설정합니다.
    - map 하위에서 쓸 때 true 해야 보임
  */
  isOpen?: boolean;
}
