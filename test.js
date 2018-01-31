'use strict';
var moment = require('./index');

moment.addHoliday('08/09'); // 'custom holiday'

let dateString;
let dateMoment;

dateString = '01-01-2018';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest capodanno',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '01-01-2017';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest capodanno',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '01-01-2016';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest capodanno',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '01-01-2015';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest capodanno',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '08-09-2018';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest custom holiday',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '08-09-2017';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest custom holiday',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '08-09-2016';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest custom holiday',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '08-09-2015';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest custom holiday',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '01-04-2018';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest easter',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '16-04-2017';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest easter',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '27-03-2016';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest easter',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '05-04-2015';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest easter',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '02-04-2018';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest the day after easter',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '17-04-2017';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest the day after easter',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '28-03-2016';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest the day after easter',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());

dateString = '06-04-2015';
dateMoment = moment(dateString, 'DD-MM-YYYY');
console.log('\nTest the day after easter',dateString,dateMoment);
console.log('working:',dateMoment.isBusinessDay(),'holiday:',dateMoment.isHoliday());
