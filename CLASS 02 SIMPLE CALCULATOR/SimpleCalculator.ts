#! /usr/bin/env node  

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "ENTER FIRST NUMBER", type: "number", name: "firstnumber" },
  { message: "ENTER SECOND NUMBER", type: "number", name: "secondnumber" },
  {
    message: "Select one of a the valid operators to perform action",
    type: "list",
    name: "Operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

// conditional statment
if (answer.Operator === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.Operator === "subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.Operator === "multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.Operator === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select a valid Operator");
}
