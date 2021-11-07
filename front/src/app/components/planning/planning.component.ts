import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lp-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  displayedColumns: string[] = ['timeslot', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  dataSource = [];

  // https://material.angular.io/components/table/overview#2-define-the-column-templates
  constructor() { }

  ngOnInit(): void {
  }

}
