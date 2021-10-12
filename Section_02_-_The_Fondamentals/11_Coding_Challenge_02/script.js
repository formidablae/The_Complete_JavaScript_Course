// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
GOOD LUCK 😀
*/

const massMarkT1 = 78;
const heightMarkT1 = 1.69;
const massJohnT1 = 92;
const heightJohnT1 = 1.95;

const massMarkT2 = 95;
const heightMarkT2 = 1.88;
const massJohnT2 = 85;
const heightJohnT2 = 1.76;

const BMIMarkT1 = massMarkT1 / (heightMarkT1 ** 2);
const BMIMarkT2 = massMarkT2 / (heightMarkT2 ** 2);

const BMIJohnT1 = massJohnT1 / (heightJohnT1 ** 2);
const BMIJohnT2 = massJohnT2 / (heightJohnT2 ** 2);

const markHigherBMIT1 = BMIMarkT1 > BMIJohnT1;
const markHigherBMIT2 = BMIMarkT2 > BMIJohnT2;

console.log(BMIMarkT1, BMIJohnT1);
console.log(BMIMarkT2, BMIJohnT2);

if (BMIMarkT1 > BMIJohnT1) {
    console.log(`Mark's BMI (${BMIMarkT1}) is higher than John's (${BMIJohnT1})!`);
} else {
    console.log(`John's BMI (${BMIJohnT1}) is higher than Marks's (${BMIMarkT1})!`);
}

if (BMIMarkT2 > BMIJohnT2) {
    console.log(`Mark's BMI (${BMIMarkT2}) is higher than John's (${BMIJohnT2})!`);
} else {
    console.log(`John's BMI (${BMIJohnT2}) is higher than Marks's (${BMIMarkT2})!`);
}
