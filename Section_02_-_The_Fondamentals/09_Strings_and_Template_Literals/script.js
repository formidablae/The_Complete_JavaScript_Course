const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;

const year = 2037;
const jonas = "I'm "
    + firstName
    + ", a "
    + (year - birthYear)
    + " year old "
    + job
    + "!";

console.log(jonas);
const jonasWithTemplateLiterals = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonasWithTemplateLiterals);

console.log(`Just a regular string...`);

console.log('String with\nmultiple\nlines');

console.log(`String
multiple
lines`);
