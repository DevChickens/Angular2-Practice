import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NumberPickerStyle } from './numberpicker.model';

@Component({
  moduleId: module.id,
  selector: 'tdk-numberpicker',
  templateUrl: 'numberpicker.component.html',
  styleUrls: ['numberpicker.component.css']
})
export class NumberPickerComponent {

  /***** input interface *****/
  // 숫자
  @Input() number: number = 0;

  // 최대숫자 제한
  @Input() maxNumber: number;

  // ngStyle을 이용하여 box의 스타일을 받도록 하는 부분
  // NumberPickerStyle 타입으로 style을 커스터마이징 할수 있다.
  // width, height, backgroundColor, Color, fontSize
  @Input() boxStyle: NumberPickerStyle;


  /***** output interface *****/
  @Output() getNumber = new EventEmitter();


  /***** Method *****/
  /* 숫자증가 */
  onUpNumber(): void { // plus minus
    this.onCalculate(1);
    this.getNumber.emit(this.number);
  }

  /* 숫자감소 */
  onDownNumber(): void {
    this.onCalculate(-1);
    this.getNumber.emit(this.number);
  }

  /* 계산부분 */
  onCalculate(_number: number) {
    // maxNumber proprty가 있는 경우 maxNumber과 같거나 작거나 0과 같거나 클경우에만 number값에 더한다.
    // 없는경우에는 0과 같거나 클경우에만 number값에 더한다.
    if (this.maxNumber) {
      if (this.number + _number <= this.maxNumber && this.number + _number >= 0) {
        this.number = this.number + _number;
      }
    } else if (this.number + _number >= 0) {
      this.number = this.number + _number;
    }
  }
}
