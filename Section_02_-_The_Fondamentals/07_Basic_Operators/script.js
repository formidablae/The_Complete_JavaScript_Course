// Mathematical operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);


// Assignment operators
let x = 10 + 5; // x = 15
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; // x = x * 4 = 100
console.log(x);
x++; // x = x + 1 = 101
console.log(x);
x--; // x = x - 1 = 100
console.log(x);
x--; // x = x - 1 = 99
console.log(x);


// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// Operator Precedence
// in MDN (Mozilla Developer Network) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
