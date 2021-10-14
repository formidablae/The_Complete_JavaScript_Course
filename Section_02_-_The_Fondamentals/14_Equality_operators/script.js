// Equality Operators: == vs. ===

const age1 = 18;
if (age1 === 18) console.log('You just became an adult :D (strict)');
if (age1 == 18) console.log('You just became an adult :D (loose)');


const age2 = '18';
if (age2 === 18) console.log('You just became an adult :D (strict)');
if (age2 == 18) console.log('You just became an adult :D (loose)');

const favourite1 = prompt("What's your favourite number?");
console.log(favourite1);
console.log(typeof favourite1);

if (favourite1 === 23) {
    console.log('Cool! 23 is an amzaing number!')
} else if (favourite1 === 7) {
    console.log('7 is also a cool number')
} else if (favourite1 === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite1 !== 23) console.log('Why not 23?');


const favourite2 = Number(prompt("What's your favourite number?"));
console.log(favourite2);
console.log(typeof favourite2);

if (favourite2 === 23) {
    console.log('Cool! 23 is an amzaing number!')
} else if (favourite2 === 7) {
    console.log('7 is also a cool number')
} else if (favourite2 === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite2 !== 23) console.log('Why not 23?');
