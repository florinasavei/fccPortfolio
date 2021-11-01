export class Calendar {
    private _years: Year[] = [];
    get years(): Year[] {
        return this._years;
    }
    set years(newWeeks: Year[]) {
        this._years = newWeeks;
    }
}

export class Year {

    constructor(theYear: number) {
        this._year = theYear;
    }

    private _year: number = 0;
    get year(): number {
        return this._year;
    }
    set year(newyear: number) {
        this._year = newyear;
    }

    private _weeks: Week[] = [];
    get weeks(): Week[] {
        return this._weeks;
    }
    set weeks(newWeeks: Week[]) {
        this._weeks = newWeeks;
    }
}

export class Week {

    constructor(theWeek: number) {
        this._weekNumber = theWeek;
    }

    private _weekNumber: number = 0;
    get weekNumber(): number {
        return this._weekNumber;
    }
    set weekNumber(newWeek: number) {
        this._weekNumber = newWeek;
    }

}