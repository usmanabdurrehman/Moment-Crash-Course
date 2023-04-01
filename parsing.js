const moment = require("moment");

// Formats
const rightNow = moment();
const stringInit = moment("2022-12-12T01:32:35");
const objectInit = moment({
  year: 2022,
  month: 11,
  day: 1,
  hour: 1,
  minutes: 34,
  second: 34,
});
const arrayInit = moment([2022, 12, 12, 1, 34, 35]);
const timestampInit = moment(123);
const dateInit = moment(new Date());
const momentInit = moment(moment());

// Parse Zone

const parsedZone = moment.parseZone("2022-12-12T01:00:00-5:00");
const removedZone = moment("2022-12-12T01:00:00-5:00");

// Validation
const isValid = moment("2022-12-12T01:32:35").isValid();
const isInValid = moment("2022-32-12T01:32:35").isValid();

const inValidAt = moment("2022-32-12T01:32:35").inValidAt();
