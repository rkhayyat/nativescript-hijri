import { Common } from './hijri.common';
export declare class Hijri extends Common {
  constructor(date, shift); 
    dayOfWeekText: string;
    dayOfWeek: string;
    dayOfMonth:number;
    month:number;
    monthText:string;
    year:number 
  
}

export declare interface islamicDateObject {
    dayOfWeekText: string;
    dayOfWeek: string;
    dayOfMonth:number;
    month:number;
    monthText:string;
    year:number   
}
