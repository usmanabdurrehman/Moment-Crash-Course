const moment = require("moment");

const date1 = moment("2022-10-10T10:00:00");
const date2 = moment("2022-10-10T11:00:00");

//#region VARS_DEFINITION
let isBefore;
let isSameOrBefore;
let isSame;
let isSameOrAfter;
let isAfter;
//#endregion

console.table(
  getFilteredObj({
    isBefore,
    isSameOrBefore,
    isSame,
    isSameOrAfter,
    isAfter,
  })
);
