
/* Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday. 
Current time is : 10 PM : 30 : 38 */
// ---------------------------------------------------------------------------------------------
// OPTION 1

let today = new Date(); // date function

let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

/* getFullYear() – Provides current year like 2018
getMonth() – Provides current month values 0-11. Where 0 for Jan and 11 for Dec. So added +1 to get result
getDate() – Provides day of the month values 1-31 */

let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;

/* getHours() – Provides current hour between 0-23.
getMinutes() – Provides current minutes between 0-59.
getSeconds() – Provides current seconds between 0-59. */

// ---------------------------------------------------------------------------------------------
// OPTION 2

let today = new Date(); // date function

let day = today.getDay();
/* getDay(); method is used to get the day of the week for the specified date according to local time, 
where 0 represents Sunday. The value returned by getDay() is an integer corresponding to the day 
of the week: 0 for Sunday, 1 for Monday, etc */


let  daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]; // array, Sunday = 0

console.log("Today is : " + daylist[day] + "."); // toma un dia de la semana y va a day para usar getDay();

let hour = today.getHours(); // The value returned by getHours() is an integer between 0 and 23.
let minute = today.getMinutes(); // The value returned by getMinutes() is an integer between 0 and 59.
let second = today.getSeconds(); // The value returned by getSeconds() is an integer between 0 and 59.

let timeofday = (hour >= 12) ? " PM ":" AM "; // ternary operator = else if

hour = (hour >= 12)? hour - 12: hour; // inicializo hour, siempre va a dar un resultado entre 0 y 12

if (hour===0 && timeofday ===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  timeofday=' Noon';
  } 
  else
  { 
  hour=12;
  timeofday=' PM';
  } 
  } 
  if (hour===0 && timeofday===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  timeofday=' Midnight';
  } 
  else
  { 
  hour=12;
  timeofday=' AM';
  } 
  } 
console.log("Current Time : "+hour + timeofday + " : " + minute + " : " + second);