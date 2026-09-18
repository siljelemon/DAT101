"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const originalExpression = 2 + 3 * 2 - 4 * 6;
const modifiedExpression = 2 + 3 * (2 - 4) * 6;

printOut("Original expression: 2 + 3 * 2 - 4 * 6 = " + originalExpression);
printOut("Modified expression: 2 + 3 * (2 - 4) * 6 = " + modifiedExpression);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
// 25m --> siden 1 meter = 1000mm: 25 * 1000 = 25000
// 34cm --> siden 1 cm = 10mm: 34 * 10 = 340
// Totalt: 25000 + 340 = 25340 mm

let millimeters = (25*1000)+(34*10);
let millPrInch = 25.4;

let sumPart2 = millimeters / millPrInch;

printOut("25 meters and 34 centimeters = " + sumPart2.toFixed(2) + "inches");

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const part3Days = 3,
      part3Hours = 12,
      part3Minutes = 14,
      part3Seconds = 45;
      
// 1 dag = 24 timer
// 1 time = 60 minutter

const part3Answer = (part3Days * 24 * 60) +
                    (part3Hours * 60) +
                     part3Minutes +
                    (part3Seconds / 60);

printOut("3 days, 12 hours, 14 minutes and 45 seconds = " + part3Answer + " minutes");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
// 1 dag = 24 timer
// 1 time = 60 minutter

const part4Minutes = 6322.52

let totalDays = part4Minutes / (24 * 60);
let days = Math.floor(totalDays);
let remainder = totalDays - days;

let totalHours = remainder * 24;
let hours = Math.floor(totalHours);
remainder = totalHours - hours;

let totalMinutes = remainder * 60;
let minutes = Math.floor(totalMinutes);
remainder = totalMinutes - minutes;

let totalSeconds = remainder * 60;
let seconds = Math.floor(totalSeconds);

printOut("Converting 6,322.52 minutes = " + days + " days, " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds");


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// nokRate --> hvor mange NOK vi får for 1 USD
// usdRate --> hvor mange USD vi får for 1 NOK

const nokRate = 76 / 8.6;
const usdRate = 8.6 / 76;

const dollars = 54;
const kroner = Math.round(dollars * nokRate);

const convertedDollars = Math.round(kroner * usdRate);

printOut(dollars + " USD = " + kroner + " NOK");
printOut(kroner + " NOK = " + convertedDollars + " USD");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

const part6Text = "There is much between heaven and earth that we do not understand.";
const textLength = part6Text.length;
printOut("Number of characters; " + textLength);

const character19 = part6Text.charAt(19);
printOut("Character at position 19: " + character19);

const characters35 = part6Text.substring(35, 43);
printOut("8 characters starting at position 35: " + characters35);

const earthIndex = part6Text.indexOf("earth");
printOut("The word earth starts at index: " + earthIndex);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

const comparison1 = 5 > 3;
printOut("Is 5 greater than 3? " + comparison1 );

const comparison2 = 7 >= 7;
printOut("Is 7 greater than or equal to 7? " + comparison2);

const comparison3 = "a" > "b";
printOut('Is "a" greater than "b"? ' + comparison3);

const comparison4 = "1" < "a";
printOut('Is "1" less than "a"? ' + comparison4);

const comparison5 = "2500" < "abcd";
printOut('Is "2500" less than "abcd"? ' + comparison5);

const comparison6 = "arne" !== "thomas";
printOut('Is "arne" not equal to "thomas"? ' + comparison6);

const comparison7 = 2 === 5;
printOut("Is 2 equal to 5? " + comparison7);

const comparison8 = "abcd" > "bcd";
printOut('Is "abcd" greater than "bcd"? ' + comparison8);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

const text254 = "254";
const number254 = Number(text254);

printOut('Text "254" converted to a number: ' + number254);

const text57 = "57.23";
const number57 = Number(text57);
const int57 = parseInt(text57);
const float57 = parseFloat(text57);

printOut('Text "57.23" converted to a number: ' + number57);
printOut('Text "57.23" converted to an integer: ' + int57);
printOut('Text "57.23" converted to a float: ' + float57);

const text25 = "25 kroner";

const number25 = Number(text25);
const int25 = parseInt(text25);
const float25 = parseFloat(text25);

printOut('Text "25 kroner" with Number(): ' + number25);
printOut('Text "25 kroner" with parseInt(): ' + int25);
printOut('Text "25 kroner" with parseFloat(): ' + float25);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

let r = Math.random();
r = r * 360;
r = Math.floor(r) + 1;

printOut("Random number from 1 to 360: " + r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

const part10weeks = Math.floor(131 / 7);
const part10days = 131 % 7;

printOut("131 days = " + part10weeks + " weeks and " + part10days + " days");


printOut(newLine);