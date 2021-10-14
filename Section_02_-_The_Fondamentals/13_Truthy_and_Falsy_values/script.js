// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean("Jonas"));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean({})); // true

const money1 = 0;

if (money1) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

const money2 = 5;

if (money2) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height1;
if (height1) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is undefined");
}

let height2 = 179;
if (height2) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is undefined");
}

let height3 = 0;
if (height3) { // wrongly
    console.log("YAY! Height is defined");
} else {
    console.log("Height is undefined");
}

let height4 = 0;
if (height4 || height4 === 0) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is undefined");
}
