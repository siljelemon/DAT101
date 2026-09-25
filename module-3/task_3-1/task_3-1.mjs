"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
//PART 1

let wakeUpTime = 7;

if (wakeUpTime === 7) {
    printOut("I can take the bus to school.");
}

// PART 2

if (wakeUpTime === 7) {
    printOut("I can take the bus to school.");
}

else {
    printOut("I have to take the car to school.")
}

// PART 3

if (wakeUpTime === 7) {
    printOut("I can take the bus to school.");
}

else if (wakeUpTime === 8) {
    printOut("I can take the train to school.");
}

else {
    printOut("I have to take the car to school.");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
// PART 4 AND PART 5

let number = 0;

if (number >= 0) {
    printOut("Positive");
} else {
    printOut("Negative");
}

// PART 5

if (number > 0) {
    printOut("Positive");
} else if (number < 0) {
    printOut("Negative");
} else {
    printOut("Zero");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

let imageSize = Math.floor(Math.random() * 8) + 1;

printOut("Image size: " + imageSize + "MP");

if (imageSize >= 4) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

if (imageSize >= 6) {
    printOut("Image is too large");
} else if (imageSize >= 4) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

const monthList = ["January", "February", "Mars", "April", "Maj",
    "Jun", "Juli", "August", "September", "October", "November", "December"];

const noOfMonth = monthList.length;

const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("Month: " + monthName);

if (monthName.includes("r")) {
    printOut("You must take vitamin D.");
} else {
    printOut("You do not need to take vitamin D.");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

if (monthName === "February") {
    printOut(monthName + " has 28 or 29 days.");
} else if (
    monthName === "April" ||
    monthName === "Jun" ||
    monthName === "September" ||
    monthName === "November"
) {
    printOut(monthName + " has 30 days.");
} else {
    printOut(monthName + " has 31 days.");
}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

if (monthName === "April") {
    printOut("The gallery is open in temporary premises next door.");
} else if (monthName === "Mars" || monthName === "Maj") {
    printOut("The gallery is closed for refurbishment.");
} else {
    printOut("The gallery is open.");
}

printOut(newLine);
