/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
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

console.log(BMIMarkT1, BMIJohnT1, markHigherBMIT1);
console.log(BMIMarkT2, BMIJohnT2, markHigherBMIT2);