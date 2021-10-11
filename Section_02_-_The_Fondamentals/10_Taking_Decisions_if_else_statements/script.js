const ageOld = 19;
const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
    console.log("Sarah can start a driving licence course 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young.`
        + `\n`
        + `Wait another ${yearsLeft} years`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
