import { CalendarDate } from './calendar-date.model';

export interface CalendarMonth {
  year: string;
  month: string;
  days: CalendarDate[][];
}
