import { Component } from '@angular/core';
import { NumberPickerStyle } from './../../tdk/numberpicker/index';

@Component({
  moduleId: module.id,
  selector: 'numberpicker-test',
  templateUrl: 'numberpicker-test.component.html',
  styleUrls: ['numberpicker-test.component.css']
})
export class NumberpickerTestComponent {
  number: number = 0;
  // interface 로 변경
  customBoxStyle: NumberPickerStyle = {
    width: '200px',
    height: '100px',
    fontSize: '30px',
    color: 'orangered',
    backgroundColor: 'lightyellow'
  };

  getNumber(_number: number): void {
    this.number = _number;
  }

  onInput(e: any): void {
    this.number = e.target.value ? parseInt(e.target.value) : 0;
  }
}
