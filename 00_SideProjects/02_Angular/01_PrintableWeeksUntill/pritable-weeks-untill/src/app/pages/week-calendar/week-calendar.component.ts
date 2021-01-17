import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-calendar',
  templateUrl: './week-calendar.component.html',
  styleUrls: ['./week-calendar.component.scss']
})
export class WeekCalendarComponent implements OnInit {

  generatedWeeks: number[][] = [];

  generateWeeks(yearUntill: number) {
    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i <= yearUntill; i++) {
      this.generatedWeeks[i] = [];
      for (let j = 1; j <= 52; j++) {
        this.generatedWeeks[i][j] = j;
      }
    }
    console.log(this.generatedWeeks);
  }

  constructor() {
    this.generateWeeks(2053);
  }

  ngOnInit(): void {
    this.generateWeeks(2053);
  }

}
