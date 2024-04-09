#! usr/env/bin node

import inquirer from "inquirer";

// 1) compiler will generate a random number - Done.

// 2) user input for guesing number - Done.

// 3) compare user input with computer generated  number and show result Done.

const randomNumber = Math.floor(Math.random() * 6 + 1); // generates a random number between

const answers = await inquirer.prompt([
  {
    name: "UserGuessedNumber",
    type: "number",
    message: "please guess a number between 1 - 6: ",
  },
]);

console.log(answers);


if (answers.UserGuessedNumber === randomNumber) {
  console.log("congratulations! you guessed right number.");
} else {
  console.log("you guessed wrong number");
}
