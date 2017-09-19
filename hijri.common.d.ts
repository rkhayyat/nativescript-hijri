import { Observable } from 'data/observable';
export declare class Common extends Observable {
    hijri_ar: islamicDateObject;
    hijri_en: islamicDateObject;
    getYear: number;
    getMonth: number;
    getDay: number;
    getMonthName_Ar: string;
    getDayName_Ar: string;
    getMonthName_En: string;
    getDayName_En: string;
    constructor(date: any, shift: any);
}
export declare class Utils {
    static getYear(date: any, shift: any): number;
    static getMonth(date: any, shift: any): number;
    static getDay(date: any, shift: any): number;
    static getMonthName_Ar(date: any, shift: any): string;
    static getDayName_Ar(date: any, shift: any): string;
    static getMonthName_En(date: any, shift: any): string;
    static getDayName_En(date: any, shift: any): string;
    static Hijri_Date_AR(date: any, shift: any): islamicDateObject;
    static Hijri_Date_EN(date: any, shift: any): islamicDateObject;
}
export declare class islamicDateObject {
    dayOfWeekText: string;
    dayOfWeek: number;
    dayOfMonth: number;
    month: number;
    monthText: string;
    year: number;
}
