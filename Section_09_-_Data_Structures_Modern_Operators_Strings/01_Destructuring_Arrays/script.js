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
const [x6 = 0, x7 = 0, x8 = 0] = [1, 2];
console.log(x6, x7, x8);
