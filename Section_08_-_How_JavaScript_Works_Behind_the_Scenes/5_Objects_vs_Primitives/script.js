'use strict';

// Objects vs. primitives

let age = 30;
let oldAge = age;

age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me', me);

////////////////////////////////////////////////////////////////////////////////

// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
    firstName: 'Jessica2',
    lastName: 'Williams2',
    age: 27,
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis2';
console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);


// Copying objects
const jessica3 = {
    firstName3: 'Jessica3',
    lastName3: 'Williams3',
    age3: 27,
    family3: ['Alice3', 'Bob3'],
};
const jessicaCopy3 = Object.assign({}, jessica3);  // shallow copy, copies correctly only first level properties
jessicaCopy3.lastName3 = 'Davis3';
jessicaCopy3.family3.push('Mary3');
jessicaCopy3.family3.push('John3');
console.log('Before marriage3:', jessica3);
console.log('After marriage3: ', jessicaCopy3);
