'use strict';

const arr1 = [7, 8, 9];
const badNewArr1 = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr1);

const newArr1 = [1, 2, ...arr1];
console.log(newArr1);

console.log( ...newArr1);

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

const newMenu1 = [...restaurant1.mainMenu, 'Gnocchi'];
console.log(newMenu1);

// copy an array
const mainMenuCopy1 = [...restaurant1.mainMenu];

// join two arrays
const mainMenuCopy2 = [...restaurant1.mainMenu, ...restaurant1.starterMenu];
console.log(mainMenuCopy2);

const str1 = 'Jonas';
console.log(...str1);
const letters1 = [...str1, ' ', 'S.'];
console.log(letters1);
// console.log(`${...str1} Schmedtmann`);

const restaurant2 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

const ingredients2 = [
    prompt("Let's make pasta! Ingredient 1?"),
    prompt("Ingredient 2?"),
    prompt("Ingredient 3?"),
];
console.log(ingredients2);

restaurant2.orderPasta(ingredients2[0], ingredients2[1], ingredients2[2]);
restaurant2.orderPasta(...ingredients2);

// objects
const restaurant3 = {
    foundedIn: 1989,
    ...restaurant2,
    founder: 'Giuseppe',
};
console.log(restaurant3);

const restaurant3Copy = {...restaurant3};
restaurant3Copy.name = 'Ristorante Roma';
console.log(restaurant3Copy.name);
console.log(restaurant3.name);
