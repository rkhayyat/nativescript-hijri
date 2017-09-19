import * as observable from 'data/observable';
import * as pages from 'ui/page';
import { DatePicker } from "ui/date-picker";
import {HelloWorldModel} from './main-view-model';
import {Hijri, islamicDateObject} from 'nativescript-hijri';
import label = require("ui/label");
var view = require("ui/core/view");
var MainViewModel = require("./main-view-model");
let page;

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel(new Date());
    // Get the event  sender
}

export function onPickerLoaded(args) {
    let datePicker = <DatePicker>args.object;
    datePicker.year = (new Date()).getFullYear();
    datePicker.month = (new Date()).getMonth() + 1;
    datePicker.day = (new Date()).getDate();
    datePicker.minDate = new Date(1975, 0, 29);
    datePicker.maxDate = new Date(2045, 4, 12);
}

  exports.see = function(args) {
    var sender = args.object;
    var parent = sender.parent;
    var year = view.getViewById(parent,"date").year;
    var month = view.getViewById(parent,"date").month
    var day = view.getViewById(parent,"date").day
    var convertDate = new Date(year, month-1, day);
    page.bindingContext = new HelloWorldModel(convertDate);
}