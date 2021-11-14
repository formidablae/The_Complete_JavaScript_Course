'use strict';

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log("jonasArray:", jonasArray);
console.log("jonasObject:", jonasObject);

/**
 * Dot vs. Bracket Notation
 */

 console.log("Last Name (dot notation):", jonasObject.lastName);
 console.log("Last Name (bracket notation):", jonasObject['lastName']);

 const nameKey = 'Name';
 console.log("First Name:", jonasObject['first' + nameKey]);
 console.log("Last Name:", jonasObject['last' + nameKey]);

 const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends");
 // console.log(jonas.interestedIn);
 console.log(jonasObject[interestedIn]);

 if (jonasObject[interestedIn]) {
    console.log(jonasObject[interestedIn]);
  } else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
  }
  jonasObject.location = 'Portugal';
  jonasObject['twitter'] = '@jonasschmedtman';
  console.log(jonasObject);

/**
 * Challenge
 * 
 * Jonas has 3 friends.
 * His best friend is called Michael
 */
console.log(`${jonasObject.firstName} has ${jonasObject.friends.length} friends. His best friend is called ${jonasObject.friends[0]}`);
