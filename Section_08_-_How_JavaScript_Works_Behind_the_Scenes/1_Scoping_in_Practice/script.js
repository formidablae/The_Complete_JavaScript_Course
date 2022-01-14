'use sctict';

// Practicing scoping

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);
    return age;
}

const firstName = 'Jonas';
calcAge(1991);

////////////////////////////////////////////////////////////////////////////////

function calcAge2(birthYear2) {
    const age2 = 2037 - birthYear2;

    function printAge() {
        const output = `${firstName2}, you are ${age2}, born in ${birthYear2}`;
        console.log(output);
    }
    printAge();

    return age2;
}

const firstName2 = 'Jonas2';
calcAge2(1991);
// console.log(age2);
// printAge();

////////////////////////////////////////////////////////////////////////////////

function calcAge3(birthYear3) {
    const age3 = 2037 - birthYear3;

    function printAge3() {
        if (birthYear3 >= 1981 && birthYear3 <= 1996) {
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName3}`;
            console.log(str);
        }
        // console.log(str);
        console.log(millenial);
    }
    printAge3();

    return age3;
}

const firstName3 = 'Jonas3';
calcAge3(1991);

////////////////////////////////////////////////////////////////////////////////

function calcAge4(birthYear4) {
    const age4 = 2037 - birthYear4;

    function printAge4() {

        if (birthYear4 >= 1981 && birthYear4 <= 1996) {
            const firstName4 = 'Steven';
            const str4 = `Oh, and you're a millenial, ${firstName4}`;
            console.log(str4);
        }
    }
    printAge4();

    return age4;
}

const firstName4 = 'Jonas4';
calcAge4(1991);

////////////////////////////////////////////////////////////////////////////////

function calcAge5(birthYear5) {
    const age5 = 2037 - birthYear5;

    function printAge5() {
        let output5 = `${firstName5}, you are ${age5}, born in ${birthYear5}`;
        console.log(output5);

        if (birthYear5 >= 1981 && birthYear5 <= 1996) {
            output5 = 'New output!d';
        }

        console.log(output5);
    }
    printAge5();

    return age5;
}

const firstName5 = 'Jonas5';
calcAge5(1991);
