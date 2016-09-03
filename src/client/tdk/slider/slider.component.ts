import {
  Component, Input, Output, EventEmitter,
  ContentChildren, QueryList, AfterContentInit
} from '@angular/core';
import { SliderItemComponent } from './slider-item.component';

@Component({
  selector: 'tdk-slider',
  template: `
  <div class="slider-container" [style.background-color]="backgroundColor">
    <div class="slider"
      [style.transform]="swipeTransform"  [style.height.px]="sliderHeight"
      (swipeleft)="onSwipeLeft($event)"   (swiperight)="onSwipeRight($event)"
      (panmove)="panMove($event)"         (panend)="panEnd($event)">
      <ng-content select="tdk-slider-item"></ng-content>
    </div>
    <template ngIf="swipeHint == 'on'">
      <div class="slider-control left" *ngIf="isNotFirstItem()">
      </div>
      <div class="slider-control right" *ngIf="isNotLastItem()">
      </div>
    </template>
  </div>
  `,
  styles: [`
    .slider-container {
      position: relative;
      overflow: hidden;
    }

    .slider {
      transform-style: preserve-3d;
      box-sizing: inherit;
    }

    .slider-control {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 5%;
      font-size: 20px;
      color: #fff;
      text-align: center;
      text-shadow: 0 1px 2px rgba(0,0,0,.6);
      opacity: .5;
    }
    .right {
      right: 0;
      left: auto;
      background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));
      background-image: -webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
      background-image: -o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
      background-image: linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
      background-repeat: repeat-x;
    }

    .left {
      left: 0;
      right: auto;
      background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));
      background-image: -webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
      background-image: -o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
      background-image: linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
      background-repeat: repeat-x;
    }
  `]
})
export class SliderComponent implements AfterContentInit {

  /****** input interface ******/

  // 바탕색 설정
  @Input() backgroundColor: string  = '#BBB';

  // 무한 swipe 여부(미구현)
  @Input() infinitySwipe: boolean   = false;

  // swipeHint 여부
  @Input() swipeHint: 'on'|'off'    = 'on';


  /****** output interface ******/

  // slider 초기화 emit
  @Output() sliderViewInit      = new EventEmitter();

  // 이전 이동시 emit
  @Output() movePrev            = new EventEmitter();

  // 다음 이동시 emit
  @Output() moveNext            = new EventEmitter();

  @ContentChildren(SliderItemComponent)
  sliderItemsQuery: QueryList<SliderItemComponent>;

  sliderItems: SliderItemComponent[] = [];

  sliderHeight: number  = 100;
  swipeTransform: string;

  private _currentIndex: number = 0;

  get currentIndex() {
    return this._currentIndex;
  }

  // currentIndex 변경 시 하위 item의 state 및 visibility 변경 실행
  set currentIndex(val: number) {
    if(this.sliderItems.length === 0)
      return ;

    this._currentIndex = val;

    for(let item of this.sliderItems) {
      let index = item.id;

      this.changeSliderItemState(index);
      this.changeNearItemVisibility(index);
    }
  }

  isNotFirstItem(): boolean {
    return this.currentIndex > 0 ? true : false;
  }

  isNotLastItem(): boolean {
    return this.currentIndex < this.sliderItems.length - 1 ? true : false;
  }

  // index 에 따른 하위 slider item state 변경하여 애니메이션 실행
  changeSliderItemState(index: number): void {
    if(index === this._currentIndex) {
      this.sliderItems[index].slideState = 'in';
    }else if(index < this._currentIndex) {
      this.sliderItems[index].slideState = 'left';
    }else if(index > this._currentIndex) {
      this.sliderItems[index].slideState = 'right';
    }
  }

  // index 에 따른 하위 slider item visibility 변경하여 좌우만 보이게
  changeNearItemVisibility(index: number): void {
    if(this.isNearIndex(index)) {
      this.sliderItems[index].visibility = 'visible';
    } else {
      this.sliderItems[index].visibility = 'hidden';
    }
  }

  isNearIndex(index: number): boolean {
    return (this.currentIndex === index
      || this.currentIndex - 1 === index
      || this.currentIndex + 1 === index) ? true : false;
  }

  // translate3d 가 아닌 translate 로 할때 버그잇음.
  setTransForm(translateX: number, translateY: number) {
    this.swipeTransform = 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0)';
  }

  // items 의 최대 height 으로 설정
  setMaxHeightByItems(): void {
    let maxHeight = 100;

    for(let item of this.sliderItems) {
      let itemHeight = item.height;

      if(itemHeight > maxHeight) {
        maxHeight = itemHeight;
      }
    }

    this.sliderHeight = maxHeight;
  }

  onSwipeLeft(event: any) {
    this.moveToNext();
  }

  onSwipeRight(event: any) {
    this.moveToPrev();
  }

  panMove(event: any) {
    this.setTransForm(event.deltaX, 0);
  }

  panEnd(event: any) {
    this.setTransForm(0, 0);
  }

  // slideItem 세팅. id를 index 값으로 넣어준다.
  setSlideItems() {
    this.sliderItems = this.sliderItemsQuery.toArray()
      .map((item: SliderItemComponent, index: number) => {
        item.id = index;
        return item;
      }
    );

    this.currentIndex = 0;
  }

  moveToNext() {
    if(this.sliderItems.length - 1 < this.currentIndex + 1)
      return ;

    this.currentIndex = this.currentIndex + 1;

    this.moveNext.emit({
      item: this.sliderItems[this.currentIndex],
      index: this.currentIndex
    });
  }

  moveToPrev() {
    if(this.currentIndex - 1 < 0)
      return ;

    this.currentIndex = this.currentIndex - 1;

    this.movePrev.emit({
      item: this.sliderItems[this.currentIndex],
      index: this.currentIndex
    });
  }

  ngAfterContentInit() {
    this.setSlideItems();
    this.setMaxHeightByItems();
    this.sliderViewInit.emit({ items: this.sliderItems });
  }

}
