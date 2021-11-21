'use strict';

// Iteration: The for Loop
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights (with for loop) repetition ${rep}`);
}

for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights (with for loop v.2) repetition ${rep}`);
}

// Looping Arrays, Breaking and Continuing
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];
console.log(jonasArray[0])
console.log(jonasArray[1])
// ...
console.log(jonasArray[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i]);
    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') {
        continue;
    }
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') {
        break;
    }
    console.log(jonasArray[i], typeof jonasArray[i]);
}

// Looping Backwards and Loops in Loops
// 0, 1, ..., 4
// 4, 3, ..., 0
for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
      console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
  