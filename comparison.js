const moment = require("moment");

let isBefore;
let isSameOrBefore;
let isSame;
let isSameOrAfter;
let isAfter;

const date1 = moment("2022-10-10T10:00:00");
const date2 = moment("2022-10-10T11:00:00");
isBefore = date1.isBefore(date2, "date");
isSameOrBefore = date1.isSameOrBefore(date2);
isSame = date1.isSame(date2);
isSameOrAfter = date1.isSameOrAfter(date2);
isAfter = date1.isAfter(date2);
