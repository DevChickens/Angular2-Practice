export interface CalendarDate {
  year: string;
  month: string;
  day: string;
  weekday: number;
  isPastMonth?: boolean;
  isFutureMonth?: boolean;
  isHoliday?: boolean;
  holidayName?: string;
  selectable?: boolean;
}
