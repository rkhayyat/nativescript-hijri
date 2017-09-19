import {Observable, fromObject} from 'data/observable';
import { DatePicker } from "ui/date-picker";
import {Hijri, islamicDateObject} from 'nativescript-hijri';


export class HelloWorldModel extends Observable {
public dayWeekText :string;
public dayWeekNumber : number;
public dayMonthNumber : number
public monthText : string;
public monthNumber : number;
public yearNumber :number;
public hijri: Hijri;
  constructor(currentDate) {
    super();

    this.hijri = new Hijri(currentDate,0);
    this.dayWeekText =this.hijri.getDayName_Ar;
    // this.dayWeekNumber = this.hijri.hijri_ar.dayOfWeek;
    this.dayMonthNumber = this.hijri.hijri_ar.dayOfMonth;
    this.monthText = this.hijri.getMonthName_Ar;
    this.monthNumber = this.hijri.getMonth;
    this.yearNumber =this.hijri.getYear;
  }

}