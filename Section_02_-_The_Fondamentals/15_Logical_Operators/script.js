// Boolean logic

const age = 16;

const a = age >= 20;
const b = age < 30;

// NOT operator

console.log(!a); // true

// AND operator

console.log(a && b); // false
console.log(!a && b); // true

// OR operator

console.log(a || b); // true
console.log(a || !b); // false

const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;

if (shouldDrive) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

if (hasDriversLicence && hasGoodVision) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

const isTired = true; // C
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
