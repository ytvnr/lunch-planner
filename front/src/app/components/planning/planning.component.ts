import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { DateService } from '../../helpers/date.service';

@Component({
  selector: 'lp-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  private daysOfTheWeek: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  selectedTabIndex: number = 0;
  days: string[] = [];

  constructor(private readonly dateService: DateService) { }

  ngOnInit(): void {
    const todayDate = new Date();
    this.selectedTabIndex = this.selectTodayIndex(todayDate);
    this.days = this.dateService.computeDateOfTheDays(todayDate);
  }

  private selectTodayIndex(todayDate: Date): number {
    // - 1 because we start week on monday
    return todayDate.getDay() - 1;
  }
}
