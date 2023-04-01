const moment = require("moment");

const date = moment("2022-6-7T01:32:35");

// Mutates the original moment object

/*
Keys
second
minute
hour
week
month
quarter
year
*/

// Adding
date.add(1, "seconds");
date.add(1, "minutes");
date.add(1, "hours");
date.add(1, "weeks");
date.add(1, "months");
date.add(1, "quarters");
date.add(1, "years");

// Subtracting
date.subtract(1, "seconds");
date.subtract(1, "minutes");
date.subtract(1, "hours");
date.subtract(1, "weeks");
date.subtract(1, "months");
date.subtract(1, "quarters");
date.subtract(1, "years");

// Start Of
date.startOf("second");
date.startOf("minute");
date.startOf("hour");
date.startOf("day");
date.startOf("week");
date.startOf("quarter");
date.startOf("year");

// End Of
date.endOf("second");
date.endOf("minute");
date.endOf("hour");
date.endOf("day");
date.endOf("week");
date.endOf("quarter");
date.endOf("year");
