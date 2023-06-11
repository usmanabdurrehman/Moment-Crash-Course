const moment = require("moment");
const { getFilteredObj } = require("./util");

const date = moment("2022-12-12T01:32:35");

//#region VARS_DEFINITION
let millisecond;
let second;
let minute;
let hour;
let day;
let weekDay;
let month;
let quarter;
let year;
//#endregion

/*
Keys
second
minute
hour
day
date
week
month
quarter
year
*/

//#region GET
//#endregion

//#region SET
//#endregion

console.table(
  getFilteredObj({
    millisecond,
    second,
    minute,
    hour,
    day,
    weekDay,
    month,
    quarter,
    year,
  })
);
