import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getDay(date: Date): string {
    switch (date.getDay()) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        throw new Error('Not a valid day of week')
    }
  }

  computeDateOfTheDays(date: Date): string[] {
    const weekDays: string[] = [];

    const curDate = date;
    // +1 because we start the week on monday
    curDate.setDate(curDate.getDate() - curDate.getDay() + 1);
    for (let i = 0; i < 7; ++i) {
      // @ts-ignore
      weekDays[i] = curDate.toLocaleDateString('fr', {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit'
      });

      curDate.setDate(curDate.getDate() + 1);
    }
    return weekDays;
  }
}
