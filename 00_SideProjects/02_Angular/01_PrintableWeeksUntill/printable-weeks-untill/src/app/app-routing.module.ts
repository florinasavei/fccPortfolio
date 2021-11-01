import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeekCalendarComponent } from './pages/week-calendar/week-calendar.component';

const routes: Routes = [
  { path: 'week-calendar', component: WeekCalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
