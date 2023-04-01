const moment = require("moment");

const date = moment("2022-6-7T01:32:35");

// Year
const year = date.format("YY"); // 22
const fullYear = date.format("YYYY"); // 2022

// Month
const oneDigitMonth = date.format("M"); // 6
const twoDigitMonth = date.format("MM"); // 06
const shortMonthName = date.format("MMM"); // Jun
const fullMonthName = date.format("MMMM"); // June

// Day of month
const oneDigitDayOfMonth = date.format("D"); // 7
const dayOfTheMonth = date.format("Do"); // 7th
const twoDigitDayOfMonth = date.format("DD"); // 07

// Day of year
const oneDigitDayOfYear = date.format("DDD"); // 7
const dayOfTheYear = date.format("DDDo"); // 7th
const twoDigitDayOfYear = date.format("DDDD"); // 07

// Day of week
const oneDigitDayOfWeek = date.format("d"); // 1
const dayOfTheWeek = date.format("do"); // 1st
const twoLetterDayOfWeek = date.format("dd"); // Sa
const threeLetterDayOfWeek = date.format("ddd"); // Sat
const fullDayOfWeek = date.format("dddd"); // Saturday

// Hour
const oneDigitHour = date.format("h"); // 1
const twoDigitHour = date.format("hh"); // 01

// Minute
const oneDigitMinute = date.format("m"); // 32
const twoDigitMinute = date.format("mm"); // 32

// Second
const oneDigitSecond = date.format("s"); // 35
const twoDigitSecond = date.format("ss"); // 35

// AM/PM
const AM = date.format("A");
const am = date.format("a");

// Escaping strings
const escaped = date.format("[Birthday]");
const withoutEscaping = date.format("Birthday");

// Combining formats

const sentence = date.format(
  "[On the] Do [of] MMMM, YYYY at HH:MM a , [I graduated from college]"
);
