import { Component, ViewChild, OnInit } from '@angular/core';

import { DatepickerComponent } from '../../tdk/datepicker/datepicker.component';
import { CalendarMonth } from '../../tdk/datepicker/calendar-month.model';
import { CalendarDate } from '../../tdk/datepicker/calendar-date.model';
import { CALENDAR_DATA } from './calendar-data';

@Component({
  selector: 'test-datepicker',
  template: `
  <p>Date: {{date}}</p>
  <input type="button" (click)="openDatepicker()" value="Open datepicker">
  <input type="text" (input)="onInput('title', $event)" value="일정선택">
  <input type="text" (input)="onInput('startLabel', $event)" value="가는날">
  <input type="text" (input)="onInput('endLabel', $event)" value="오는날">
  <tdk-datepicker #datepicker
    (change)="onChangeDatepicker($event)"
    [title]="title"
    [startLabel]="startLabel"
    [endLabel]="endLabel"
    [calendar]="calendar"
    style="height: 50vh">
  </tdk-datepicker>
  `
})
export class DatepickerTestComponent implements OnInit {
  date: string;

  title: string = '일정선택';
  startLabel: string = '가는날';
  endLabel: string = '오는날';
  calendar: CalendarMonth[];

  @ViewChild('datepicker')
  datepicker: DatepickerComponent;

  ngOnInit() {
    // API에서 가져온 데이터 파싱
    let temp = JSON.parse(CALENDAR_DATA);
    for (let i = 0, l1 = temp.length; i < l1; i++) {
      let days = temp[i].days;
      for (let j = 0, l2 = days.length; j < l2; j++) {
        let daysRow = days[j];
        for (let k = 0, l3 = daysRow.length; k < l3; k++) {
          // isHoliday가 string으로 들어있기에 boolean으로 변경
          if (daysRow[k].isHoliday !== undefined) {
            daysRow[k].isHoliday = daysRow[k].isHoliday === 'true';
          }
          // 다음달의 날짜일 경우 isPresentMonth가 있는데 단어가 잘못 쓰임
          if (daysRow[k].isPresentMonth !== undefined) {
            daysRow[k].isFutureMonth = daysRow[k].isPresentMonth;
            delete daysRow[k].isPresentMonth;
          }
          // 파싱한 데이터에 없는 month와 year 추가
          let month = parseInt(temp[i].month) + (daysRow[k].isFutureMonth ? 1 : 0) - (daysRow[k].isPastMonth ? 1 : 0);
          let year = parseInt(temp[i].year) + Math.floor((month - 1) / 12);
          month = (month + 11) % 12 + 1;
          daysRow[k].month = ('0' + month).substr(-2);
          daysRow[k].year = ('000' + year).substr(-4);
        }
      }
    }
    this.calendar = temp;
  }

  openDatepicker() {
    this.datepicker.open();
  }

  onChangeDatepicker(calendarDates: [CalendarDate, CalendarDate]) {
    const START = 0;
    const END = 1;
    this.date = this.padLeft(calendarDates[START].year, 4) + '-'
              + this.padLeft(calendarDates[START].month, 2) + '-'
              + this.padLeft(calendarDates[START].day, 2) + ' ~ '
              + this.padLeft(calendarDates[END].year, 4) + '-'
              + this.padLeft(calendarDates[END].month, 2) + '-'
              + this.padLeft(calendarDates[END].day, 2);
  }

  onInput(prop: string, event: any) {
    const value = event.target.value;
    if (prop === 'title') {
      this.title = value;
    } else if (prop === 'startLabel') {
      this.startLabel = value;
    } else if (prop === 'endLabel') {
      this.endLabel = value;
    }
  }

  /**
   * 숫자 또는 문자열 왼쪽에 패딩을 넣어줌
   * padLeft(1234, 6) === '001234'
   * padLeft(1234, 6, ' ') === '  1234'
   */
  padLeft(value: number | string, length: number, padString?: string): string {
    return Array(1 + length - String(value).length).join(padString || '0') + value;
  }
}
