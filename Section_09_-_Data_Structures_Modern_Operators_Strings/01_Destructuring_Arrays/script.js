'use strict';

const restaurant1 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: [
        'Italian',
        'Pizzeria',
        'Vegetarian',
        'Organic',
    ],
    starterMenu: [
        'Focaccia',
        'Bruschetta',
        'Garlic Bread',
        'Caprese Salad',
    ],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;  // destructuring
console.log(x, y, z);
console.log(arr);

const[first, second] = restaurant1.categories;
console.log(first, second);

const [frst, , thrd] = restaurant1.categories;
console.log(frst, thrd);

let [main, , secondary] = restaurant1.categories;
console.log(main, secondary);

// old way switching values
const temp = main;
main = secondary;
secondary = temp;

// new way with destructuring
[secondary, main] = [main, secondary];
console.log(main, secondary); 

////////////////////////////////////////////////////////////////////////////////

const restaurant2 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: [
        'Italian',
        'Pizzeria',
        'Vegetarian',
        'Organic',
    ],
    starterMenu: [
        'Focaccia',
        'Bruschetta',
        'Garlic Bread',
        'Caprese Salad',
    ],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

console.log('restaurant2.order(2, 0)', restaurant2.order(2, 0));
const [starter2, mainCourse2] = restaurant2.order(2, 0);

// nested destructuring
const nested = [2, 4, [5, 6]];
const [x1, x2] = nested;
console.log(x1, x2);
const [x3, , [x4, x5]] = nested;
console.log(x3, x4, x5);

// destructuring with default values
const [x6, x7, x8] = [1, 2];
console.log(x6, x7, x8);
const [x9 = 0, x10 = 0, x11 = 0] = [1, 2];
console.log(x9, x10, x11);

// desctructuring objects
const restaurant3 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

const {name, openingHours, categories} = restaurant3;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant3;
console.log(restaurantName, hours, tags);

// with default values
const { menu = [], starterMenu: starters = [] } = restaurant3;
console.log(menu, starters);

// mutating variables
let a2 = 111;
let b2 = 999;
const obj = {
    a2: 23,
    b2: 7,
    c2: 14,
};
// const {a2, b2} = obj;
// let {a2, b2} = obj;
// {a2, b2} = obj;
({a2, b2} = obj);
console.log(a2, b2);

// nested objects
const { fri } = openingHours;
console.log(fri);

const { fri: { open, close } } = openingHours;
console.log(fri, open, close);

const { fri: { open: op, close: cl } } = openingHours;
console.log(fri, op, cl);

////////////////////////////////////////////////////////////////////////////////

const weekdays4 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours4 = {
    [weekdays4[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays4[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays4[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant4 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours4,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

restaurant4.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});  // allows to pass arguments in any order and with default values

restaurant4.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
});
