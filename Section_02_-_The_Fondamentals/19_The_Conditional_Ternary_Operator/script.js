const age = 23;

age >= 18 ? console.log('I like to drive') : console.log('I like to ride');

const driveOrRide = age >= 18 ? 'car' : 'bike';
console.log(driveOrRide);

let driveOrRide2;
if (age >= 18) {
    driveOrRide2 = 'car';
} else {
    driveOrRide2 = 'bike';
}
console.log(driveOrRide2);

console.log(`I like to ${age >= 18 ? 'drive cars' : 'ride bikes'}`);
