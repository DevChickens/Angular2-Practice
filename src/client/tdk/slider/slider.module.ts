import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent } from './slider.component';
import { SliderItemComponent } from './slider-item.component';


@NgModule({
  imports: [ CommonModule ],
  declarations: [
    SliderComponent,
    SliderItemComponent
  ],
  exports: [
    SliderComponent,
    SliderItemComponent
  ]
})
export class SliderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SliderModule
    };
  }
}
/*
  먼저 hammerjs 를 import 해야한다.
  main module 에 hammerjs configuration 없을 경우..
  다음을 가져다가 쓴다.
*/
// import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
// import { SliderHammerConfig } from './hammer.config';

// provide(HAMMER_GESTURE_CONFIG, {
//     useClass: SliderHammerConfig
// })

/*
  아래는 hammer.config.ts
*/
// import { HammerGestureConfig } from '@angular/platform-browser';


// hammerjs config!
// swipe 를 전체 방향으로 커스터마이징 함
// export class SliderHammerConfig extends HammerGestureConfig  {
//     overrides = <any>{
//         'swipe': { velocity: 0.8, threshold: 20, direction: Hammer.DIRECTION_ALL } // our custom settings
//     };
// }
