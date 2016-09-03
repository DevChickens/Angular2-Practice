import {
  Component, ElementRef,
  trigger, state, style, animate, transition
} from '@angular/core';

@Component({
  selector: 'tdk-slider-item',
  template: `
    <div [@slideAnimation]="slideState" class="slider-item" [style.visibility]="visibility">
      <ng-content></ng-content>
    </div>
  `,
  animations: [
        trigger('slideAnimation', [
            state('right', style({
                transform: 'translate(100%,0)'
            })),
            state('in, void', style({
                transform: 'translate(0,0)'
            })),
            state('left', style({
                transform: 'translate(-100%, 0)'
            })),
            transition('right <=> in', [
                animate('300ms ease')
            ]),
            transition('left <=> in', [
                animate('300ms ease')
            ])
        ])
  ],
  styles: [`
    .slider-item {
      position: absolute !important;
      left: 0;
      top: 0;
      width: 100%;
      display: block !important;
      overflow: hidden;
      box-sizing: inherit;
    }

  `]
})
export class SliderItemComponent {
  // slider item 의 id
  id: number = 0;

  // slider item 의 visibility 설정 값
  visibility: string = 'visible';

  element: HTMLElement;

  // animation 할 item 의 상태
  _slideState: 'in'|'left'|'right'|'void' = 'void';

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  // 상태 변경 조건에 따라 애니메이션 실행
  set slideState(state: 'in'|'left'|'right'|'void') {
    this._slideState = state;
  }

  get slideState() {
    return this._slideState;
  }

  get isActive() {
    return this.slideState === 'in';
  }

  get height(): number {
    let height = this.element.clientHeight;

    if(height > 1)
      return height;

    // height  지정 안됬을 시 하위 엘리먼트 총합으로 리턴
    let childElement = this.element.firstElementChild;

    while(childElement !== null) {
      height = height + (<HTMLElement>childElement).offsetHeight;

      childElement = childElement.nextElementSibling;
    }
    return height;
  }

}
