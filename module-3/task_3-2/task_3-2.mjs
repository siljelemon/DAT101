"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// Counting up and down

// 1. Create two empty strings to store the numbers
let countingUp = "";
let countingDown = "";

// 2. Count up from 1 to 10 and down from 10 to 1
for (let i = 1, j = 10; i <= 10; i++, j--) {

// 3. Add each number to the correct string
    countingUp += i + " ";
    countingDown += j + " ";
}

// 4. Print both strings after the loop
printOut(countingUp);
printOut(countingDown);


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

// Number Guessing Game

// 1. Declare the secret number and starting guess
let secretNumber = 31;
let guessedNumber = 0;

// 2. Keep guessing until the number is correct
while (guessedNumber !== secretNumber) {

    // 3. Generate a random number between 1 and 60
    guessedNumber = Math.floor(Math.random() * 60) + 1;
}

// 4. Print the correct number after the loop
printOut(guessedNumber);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
// Guessing game - Level Up!

// 1. Declare variables
let secretNumber2 = 156324  ;
let guessedNumber2 = 0;
let numberOfGuesses = 0;

// 2. Start measuring time
let startTime = Date.now();

// 3. Guess until the number is correct
while (guessedNumber2 !== secretNumber2) {
    guessedNumber2 = Math.floor(Math.random() * 1000000) + 1;
    numberOfGuesses++;
}

// 4. Stop measuring time
let endTime = Date.now();
let timeUsed = endTime - startTime;


 // 5. Print the results
printOut("Guessed number: " + guessedNumber2);
printOut("Number of guesses: " + numberOfGuesses);
printOut("Time used: " + timeUsed + " ms");



printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
// Prime Number Hunter

// 1. Loop through numbers from 2 to 199
for (let number = 2; number < 200; number++) {

    // 2. Declare variables
    let divisor = 2;
    let isPrime = true;

    // 3. Check if the number is prime
    while (divisor < number) {

        if (number % divisor === 0) {
            isPrime = false;
            break;
        }

        divisor++;
    }

    // 4. Print the prime number
    if (isPrime) {
        printOut(number);
    }
}



printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

// Nested Loops & Patterns

// 1. Outer loop creates 7 rows
for (let row = 1; row <= 7; row++) {

    // 2. Create an empty string for each row
    let rowText = "";

    // 3. Inner loop creates 9 columns
    for (let column = 1; column <= 9; column++) {

        // 4. Add column and row numbers to the string
        rowText += "K" + column + "R" + row + " ";
    }

    // 5. Print the completed row
    printOut(rowText);
}


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
// Grade Simulator & Sorting Challenge

// 1. Set the maximum possible score
let maxScore = 236;

// 2. Generate grades for 5 students
for (let student = 1; student <= 5; student++) {

    // 3. Generate a random score between 1 and 236
    let score = Math.floor(Math.random() * 236) + 1;

    // 4. Convert the score into a percentage
    let percentage = (score / maxScore) * 100;

    // 5. Determine the grade
    let grade = "";

    if (percentage >= 89) {
        grade = "A";
    } else if (percentage >= 77) {
        grade = "B";
    } else if (percentage >= 65) {
        grade = "C";
    } else if (percentage >= 53) {
        grade = "D";
    } else if (percentage >= 41) {
        grade = "E";
    } else {
        grade = "F";
    }

    // 6. Print the student's result
    printOut("Student " + student + ": " + score +
        "/236 points (" + percentage.toFixed(1) +
        "%) - Grade: " + grade);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

// Dice Rolling Extravaganza

// 1. Helper function to count matching characters
function matchString(aString, aNumber) {
    let counter = 0;

    for (let i = 0; i < aString.length; i++) {
        if (aString[i] == aNumber) {
            counter++;
        }
    }

    return counter;
}

// 2. Track the combinations we have found
let foundStraight = false;
let foundPairs = false;
let foundTower = false;
let foundYahtzee = false;

let totalThrows = 0;

// 3. Roll six dice until all combinations are found
do {
    totalThrows++;

    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let d3 = Math.floor(Math.random() * 6) + 1;
    let d4 = Math.floor(Math.random() * 6) + 1;
    let d5 = Math.floor(Math.random() * 6) + 1;
    let d6 = Math.floor(Math.random() * 6) + 1;

    // 4. Combine the dice into one string
    let diceString = "" + d1 + d2 + d3 + d4 + d5 + d6;

    // 5. Count how many times each face appears
    let c1 = matchString(diceString, 1);
    let c2 = matchString(diceString, 2);
    let c3 = matchString(diceString, 3);
    let c4 = matchString(diceString, 4);
    let c5 = matchString(diceString, 5);
    let c6 = matchString(diceString, 6);

    // 6. Create a pattern string from the counts
    let countString = "" + c1 + c2 + c3 + c4 + c5 + c6;

    // 7. Check for Full Straight
    if (!foundStraight && matchString(countString, 1) === 6) {
        foundStraight = true;
        printOut("Full Straight: " + totalThrows + " throws");
    }

    // 8. Check for Three Pairs
    if (!foundPairs && matchString(countString, 2) === 3) {
        foundPairs = true;
        printOut("Three Pairs: " + totalThrows + " throws");
    }

    // 9. Check for Tower
    if (!foundTower &&
        matchString(countString, 4) === 1 &&
        matchString(countString, 2) === 1) {

        foundTower = true;
        printOut("Tower: " + totalThrows + " throws");
    }

    // 10. Check for Yahtzee
    if (!foundYahtzee && matchString(countString, 6) === 1) {
        foundYahtzee = true;
        printOut("Yahtzee: " + totalThrows + " throws");
    }

} while (!foundStraight || !foundPairs || !foundTower || !foundYahtzee);

// 11. Print the total number of throws
printOut("Total throws: " + totalThrows);

printOut(newLine);
