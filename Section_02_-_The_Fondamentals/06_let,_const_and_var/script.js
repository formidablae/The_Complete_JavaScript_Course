let age = 30; // let is block scoped
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer"; // var is function scoped
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);

// debugger;

{
    let y = "yes"

    // console.log(x);
    let x = "Cooler";
    // debugger;

    hacky = "Great!"; // global and visible afterwards

    if (true) {
        // debugger;
        let x;
        // debugger;
        console.log(x);
        // debugger;

        x = "Fancy";
        // let x = "Fancy";
        // debugger;
        console.log(x);
        // debugger;
    }

    // debugger;
    console.log(x);
}

// console.log(y);

let peter = "Hero!";

