const moment = require("moment");

const date = moment("2022-12-12T01:32:35");

// GET

const millisecond = date.millisecond();
const second = date.second();
const minute = date.minute();
const hour = date.hour();
const day = date.day(); // 1 to 31
const weekDay = date.date(); // 0 to 6
const month = date.month();
const quarter = date.quarter();
const year = date.year();

const getAny = date.get("hour");

// SET

date.millisecond(1000);
date.second(10);
date.minute(2);
date.hour(34);
date.day(53); // 1 to 31
date.date(435); // 0 to 6
date.month(32);
date.quarter(34);
date.year(23);

date.set({ hour: 0, second: 10 });
