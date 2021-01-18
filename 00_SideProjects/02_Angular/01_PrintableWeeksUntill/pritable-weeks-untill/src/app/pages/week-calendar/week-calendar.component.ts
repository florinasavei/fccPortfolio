import { Component, OnInit } from '@angular/core';
import { Calendar, Week, Year } from './calendar.model';

@Component({
  selector: 'app-week-calendar',
  templateUrl: './week-calendar.component.html',
  styleUrls: ['./week-calendar.component.scss']
})
export class WeekCalendarComponent implements OnInit {

  generatedWeeks: Calendar = new Calendar();

  generateWeeks(yearUntill: number) {
    let currentYear = new Date().getFullYear();
    for (let y = currentYear; y <= yearUntill; y++) {
      let year = new Year(y);
      for (let j = 1; j <= 52; j++) {
        let week = new Week(j);
        year.weeks.push(week);
      }
      this.generatedWeeks.years.push(year)
    }
    console.log(this.generatedWeeks);
  }

  constructor() {
    this.generateWeeks(2054);
  }

  ngOnInit(): void {
  }

}
