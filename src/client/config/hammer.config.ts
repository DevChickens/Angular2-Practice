import { HammerGestureConfig } from '@angular/platform-browser';

/*
  HammerJs 설정파일입니다.
  - HammerJs 를 설정하고 app.module 에 provide 합니다.
  - swipe: 적절한 속도(velocity)와 이동거리(threshold)를 설정하여 감도를 조절합니다.
*/
export class TravelhowHammerConfig extends HammerGestureConfig  {
    overrides = <any>{
        'swipe': { velocity: 0.3, threshold: 20, direction: Hammer.DIRECTION_ALL }
    };
}
