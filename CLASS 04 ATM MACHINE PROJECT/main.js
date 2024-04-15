import inquirer from "inquirer";
let MyBalance = 10000; // DOLLAR
let MyPin = 1234; // PIN
let pinAnswer = await inquirer.prompt([
    {
        name: 'pin',
        message: 'enter your pin number',
        type: 'number'
    }
]);
// 12345 === 1234 - false
if (pinAnswer.pin === MyPin) {
    console.log("  Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select one option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        // =, -=, += 
        MyBalance -= amountAns.amount;
        console.log("Your Remaining Balance Is: " + MyBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your Balance Is: " + MyBalance);
    }
}
else {
    console.log("Incorrect Pin Number");
}
