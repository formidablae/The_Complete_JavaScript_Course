'use strict';


// spread operator
const arr1 = [1, 2, ...[3, 4]];

// rest pattern
const [a1, b1, ...others1] = [1, 2, 3, 4, 5];

console.log(a1, b1, others1);

const restaurant1 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

const [pizza, , risotto, ...otherFood] = [...restaurant1.mainMenu, ...restaurant1.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant1.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x2 = [23, 5, 7];
add(...x2);
restaurant1.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant1.orderPizza('mushrooms');
