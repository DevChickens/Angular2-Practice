import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CalendarMonth } from './calendar-month.model';
import { CalendarDate } from './calendar-date.model';

@Component({
  moduleId: module.id,
  selector: 'tdk-datepicker',
  templateUrl: 'datepicker.component.html',
  styleUrls: ['datepicker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent {
  @Input()
  calendar: CalendarMonth[] = [];
  @Input()
  title: string = '선택';
  @Input()
  startLabel: string = '시작';
  @Input()
  endLabel: string = '끝';
  @Input()
  dayNames: Array<string> = ['일', '월', '화', '수', '목', '금', '토'];

  @Output()
  change: EventEmitter<[CalendarDate, CalendarDate]> = new EventEmitter<[CalendarDate, CalendarDate]>();

  startDate: CalendarDate = null;
  endDate: CalendarDate = null;

  private isOpened: boolean = false;

  private startDateBackUp: CalendarDate = null;
  private endDateBackUp: CalendarDate = null;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  /**
   * Date를 넣으면 그 날이 속하는 달의 달력을 리턴함
   * 공휴일은 포함하지 않음
   */
  /*
  static generateCalendar(date: Date): CalendarDate[][] {
    let calendar: CalendarDate[][] = [];
    let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let firstWeekFirstDay = new Date(firstDayOfMonth.valueOf());
    firstWeekFirstDay.setDate(1 - firstWeekFirstDay.getDay());
    for (let i = 0, lastDay = Math.ceil((lastDayOfMonth.getDate() + firstDayOfMonth.getDay()) / 7) * 7; i < lastDay; i++) {
      let date = new Date(firstWeekFirstDay.valueOf());
      date.setDate(firstWeekFirstDay.getDate() + i);
      if (typeof calendar[Math.floor(i / 7)] === 'undefined') {
        calendar[Math.floor(i / 7)] = [];
      }
      let calendarDate = <CalendarDate>{
        year: date.getFullYear().toString(),
        month: (date.getMonth() + 1).toString(),
        day: date.getDate().toString(),
        weekday: date.getDay()
      };
      if (date.getMonth() < firstDayOfMonth.getMonth()) {
        calendarDate.isPastMonth = true;
      } else if (date.getMonth() > firstDayOfMonth.getMonth()) {
        calendarDate.isFutureMonth = true;
      } else if (calendarDate.weekday === 0 || calendarDate.weekday === 6) {
        calendarDate.isHoliday = true;
      }
      calendarDate.selectable = true;
      calendar[Math.floor(i / 7)].push(calendarDate);
    }
    return calendar;
  }
  */

  /**
   * Datepicker 열기
   */
  open() {
    this.isOpened = true;
    this.changeDetectorRef.markForCheck();
  }

  /**
   * Datepicker 닫기
   */
  close() {
    this.isOpened = false;
  }

  /**
   * 선택 초기화
   */
  clear() {
    this.startDate = null;
    this.endDate = null;
  }

  /**
   * 완료
   */
  done() {
    if (this.startDate && this.endDate) {
      this.startDateBackUp = this.startDate;
      this.endDateBackUp = this.endDate;
      this.change.emit([this.startDate, this.endDate]);
    } else {
      this.startDate = this.startDateBackUp;
      this.endDate = this.endDateBackUp;
    }
    this.close();
  }

  /**
   * 날짜 선택
   */
  selectDay(day: CalendarDate) {
    if (this.isSelectableDate(day)) {
      if (!this.startDate) {
        this.startDate = day;
      } else {
        if (this.endDate && this.compareDate(day, this.endDate) === 0) {
          this.startDate = day;
        }
        this.endDate = day;
        if (this.compareDate(this.startDate, this.endDate) === 1) {
          let temp = this.endDate;
          this.endDate = this.startDate;
          this.startDate = temp;
        }
      }
    }
  }

  /**
   * 날짜가 선택 가능한지 확인
   */
  isSelectableDate(date: CalendarDate): boolean {
    return date.selectable;
  }

  /**
   * 날짜가 선택되었는지 확인
   */
  isSelectedDate(date: CalendarDate, startOrEnd: string): boolean {
    if (startOrEnd === 'start') {
      return (this.startDate && this.compareDate(date, this.startDate) === 0);
    } else if (startOrEnd === 'end') {
      return (this.endDate && this.compareDate(date, this.endDate) === 0);
    }
    return (this.startDate && this.compareDate(date, this.startDate) === 0)
      || (this.endDate && this.compareDate(date, this.endDate) === 0);
  }

  /**
   * 날짜가 선택 범위 내에 있는지 확인
   */
  isDateInGap(date: CalendarDate): boolean {
    return (this.startDate && this.compareDate(date, this.startDate) !== -1)
      && (this.endDate && this.compareDate(date, this.endDate) !== 1);
  }

  /**
   * 날짜가 지난달이거나 다음달인지 확인
   */
  isDatePastOrFutureMonth(date: CalendarDate): boolean {
    return date.isPastMonth || date.isFutureMonth;
  }

  /**
   * 날짜 비교
   * 왼쪽이 나중이면 1, 오른쪽이 나중이면 -1, 같으면 0
   */
  compareDate(date: CalendarDate, compareDate: CalendarDate): number {
    return this.calendarDateToString(date).localeCompare(this.calendarDateToString(compareDate));
  }

  /**
   * CalendarDate -> string
   */
  calendarDateToString(date: CalendarDate): string {
    return this.padLeft(date.year, 4) + '-' +
           this.padLeft(date.month, 2) + '-' +
           this.padLeft(date.day, 2);
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
