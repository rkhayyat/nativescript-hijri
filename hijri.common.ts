import { Observable } from 'data/observable';
import * as app from 'application';
import {Arabic, English} from './language';
import {HijriFunction} from './basecal';

export class Common extends Observable {
  public hijri_ar: islamicDateObject;
  public hijri_en: islamicDateObject;
  public getYear:number;
  public getMonth:number;
  public getDay:number;
  public getMonthName_Ar:string;
  public getDayName_Ar:string;
  public getMonthName_En:string;
  public getDayName_En:string;

  constructor(date, shift) {
    super();
    this.hijri_ar = Utils.Hijri_Date_AR(date, shift);
    this.hijri_en = Utils.Hijri_Date_EN(date, shift);
    this.getYear = Utils.getYear(date, shift);
    this.getMonth = Utils.getMonth(date, shift);
    this.getDay = Utils.getDay(date, shift);
    this.getMonthName_Ar = Utils.getMonthName_Ar(date, shift);
    this.getDayName_Ar = Utils.getDayName_Ar(date, shift);
    this.getMonthName_En = Utils.getMonthName_En(date, shift);
    this.getDayName_En = Utils.getDayName_En(date, shift);
  }
}



export class Utils {  
  public static getYear(date, shift):number{
    let _hijriFunction = new HijriFunction();
    let year:number = _hijriFunction.basecal(date, shift)[7];
    return year;
  }
  public static getMonth(date, shift):number{
    let _hijriFunction = new HijriFunction();
    let month:number = _hijriFunction.basecal(date, shift)[6]+1;
    return month;
  }
  public static getDay(date, shift):number{
    let _hijriFunction = new HijriFunction();
    let day:number = _hijriFunction.basecal(date, shift)[5];
    return day;
  }
  public static getMonthName_Ar(date, shift):string{
    let _hijriFunction = new HijriFunction();
    let monthName_Ar:string = Arabic.MonthNames[_hijriFunction.basecal(date, shift)[6]];
    return monthName_Ar;
  }
  public static getDayName_Ar(date, shift):string{
    let _hijriFunction = new HijriFunction();
    let dayName_Ar:string = Arabic.wdNames[_hijriFunction.basecal(date, shift)[4]];
    return dayName_Ar;
  }
  public static getMonthName_En(date, shift):string{
    let _hijriFunction = new HijriFunction();
    let monthName_En:string = English.MonthNames[_hijriFunction.basecal(date, shift)[6]];
    return monthName_En;
  }
  public static getDayName_En(date, shift):string{
    let _hijriFunction = new HijriFunction();
    let dayName_En:string = English.wdNames[_hijriFunction.basecal(date, shift)[4]];
    return dayName_En;
  }

  public static Hijri_Date_AR(date, shift): islamicDateObject {
    let _hijriFunction = new HijriFunction();
    let hijriDate:islamicDateObject;
    hijriDate = {
		            dayOfWeekText:Arabic.wdNames[_hijriFunction.basecal(date, shift)[4]] ,
		            dayOfWeek:_hijriFunction.basecal(date, shift)[4]+1,
		            dayOfMonth:_hijriFunction.basecal(date, shift)[5],
		            month:_hijriFunction.basecal(date, shift)[6]+1,
		            monthText:Arabic.MonthNames[_hijriFunction.basecal(date, shift)[6]],
		            year:_hijriFunction.basecal(date, shift)[7]
              };
    return hijriDate;
  }

  public static Hijri_Date_EN(date, shift): islamicDateObject {
    let hijriDate:islamicDateObject;
    let _hijriFunction = new HijriFunction();
    hijriDate = {
		            dayOfWeekText:English.wdNames[_hijriFunction.basecal(date, shift)[4]] ,
		            dayOfWeek:_hijriFunction.basecal(date, shift)[4]+1,
		            dayOfMonth:_hijriFunction.basecal(date, shift)[5],
		            month:_hijriFunction.basecal(date, shift)[6]+1,
		            monthText:English.MonthNames[_hijriFunction.basecal(date, shift)[6]],
		            year:_hijriFunction.basecal(date, shift)[7]
              };
    return hijriDate;
  }
}

export class islamicDateObject {
    dayOfWeekText: string;
    dayOfWeek: number;
    dayOfMonth:number;
    month:number;
    monthText:string;
    year:number
} 

