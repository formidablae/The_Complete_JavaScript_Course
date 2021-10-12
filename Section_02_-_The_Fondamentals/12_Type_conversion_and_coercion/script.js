// Type corversion (explicit conversion)
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + 2 + 3 + " years old");
console.log("I am " + (2 + 3) + " years old");
console.log(5 + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log(23 + "10" + "3");

console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // '11'
console.log(n);

n = n - 1;
console.log(n);

console.log(23 + "10" * 2);
console.log("23" * 10 + "2");
console.log(23 + "10" - 2);
