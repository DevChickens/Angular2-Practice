import { Component } from '@angular/core';

@Component({
  selector: 'my-slider',
  template: `
    <div>
      <tdk-slider
        (movePrev)="onMovePrev($event)"
        (moveNext)="onMoveNext($event)">
        <tdk-slider-item>
          <div [style.background-color]="'#C99'" style="height:300px;">
            this is slider-item1
          </div>
        </tdk-slider-item>
        <tdk-slider-item>
          <div [style.background-color]="'#CC9'">
            this is slider-item2
          </div>
        </tdk-slider-item>
        <tdk-slider-item>
          <div [style.background-color]="'#CCC'">
            this is slider-item3
          </div>
        </tdk-slider-item>
        <tdk-slider-item>
          <div [style.background-color]="'#99C'">
            this is slider-item4
          </div>
        </tdk-slider-item>
        <tdk-slider-item>
          <div [style.background-color]="'#9CC'" >
            this is slider-item5
          </div>
        </tdk-slider-item>
      </tdk-slider>
    </div>

  `
})
export class SliderTestComponent {
  onMovePrev(e: any) {
    console.log('prev');
    console.log(e);
  }
  onMoveNext(e: any) {
    console.log('next');
    console.log(e);
  }
}
