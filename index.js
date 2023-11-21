const year = 2023;

const isLeap = (year % 400 === 0) || (year % 100 === 0 && year % 4 === 0);

const JanDay = 31;
const FebDay = isLeap ? 29 : 28;
const MarDay = 31;
const AprDay = 30;
const MayDay = 31;
const JunDay = 30;
const JulDay = 31;
const AugDay = 31;
const SepDay = 30;
const OctDay = 31;
const NovDay = 30;
const DecDay = 31;

const monthNames = [
  'January',
  'Febrary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const monthDays = [
  JanDay,
  FebDay,
  MarDay,
  AprDay,
  MayDay,
  JunDay,
  JulDay,
  AugDay,
  SepDay,
  OctDay,
  NovDay,
  DecDay,
];

const weekValue = 7;

for (let month = 1; month <= 12; month++) {
  console.log(`This is a calender of the ${monthNames[month - 1]}`);
  console.log('\n');
  console.log('Sun \tMon \tTue \tWed \tThu \tFri \tSat');
  const monthDay = monthDays[month - 1];
  const prevMonthDay = monthDays[month - 2];
  let firstDayInWeek = new Date(`${year}-${month}-01`).getDay();

  const prefixFill = [];
  for (let i = firstDayInWeek - 1; i >= 0; i--) {
    prefixFill.push(prevMonthDay - i);
  }

  let acc = firstDayInWeek === 0
    ? []
    : prefixFill;
  let count = firstDayInWeek;
  const whole = [];
  for (let i = 1; i <= monthDay; i++) {
    if (count + 1 < 8) {
      acc.push(i);
      count++;
    } else {
      whole.push(acc);
      // reset
      acc = [];
      count = 0;

      acc.push(i);
      count++;
    }
  }


  const lastFillNums = weekValue - acc.length;
  const suffixFill = [];
  for (let i = 1; i <= lastFillNums; i++) {
    suffixFill.push(i);
  }

  const endAcc = acc.concat(suffixFill);
  whole.push(endAcc);

  whole.forEach(item => {
    const result = item.reduce((prev, curr) => {
      prev += `\t\t${curr}`;
      return prev;
    }, '').replace(/^\t\t/, '').replace(/\s$/, '');
    console.log(result);
  });

  console.log('\n');
  console.log('==============================month calender divider================================');
  console.log('\n');
}