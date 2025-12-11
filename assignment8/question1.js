/*

"Assignment 8:
1. Write a program that takes a date and prints the day on which the date falls on.


*/

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// below commented code only works in browser.
// let year = prompt("Enter year");
// let month = prompt("Enter month in number");
// let day = prompt("Enter date(dd)");

// let datefinal = year+"-"+month+"-"+day;

let datefinal = "2025-12-21";

let d = new Date(datefinal);

alert(days[d.getDay()]);