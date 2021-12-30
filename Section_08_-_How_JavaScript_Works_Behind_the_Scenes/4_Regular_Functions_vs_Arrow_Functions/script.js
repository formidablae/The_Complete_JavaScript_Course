'use strict';

// Regular Functions vs. Arrow Functions
const jonas1 = {
    firstName1: 'Jonas',
    year1: 1991,
    calcAge1: function () {
        console.log(this);
        console.log(2037 - this.year1);
    },
    greet1: () => console.log(`Hey ${this.firstName1}`),
};
jonas1.greet1();

////////////////////////////////////////////////////////////////////////////////

var firstName2 = 'Matilda';
const jonas2 = {
    firstName2: 'Jonas',
    year2: 1991,
    calcAge2: function () {
        console.log(this);
        console.log(2037 - this.year2);
    },
    greet2: () => {
        console.log(this);
        console.log(`Hey ${this.firstName2}`);
    }
};
jonas2.greet2();

////////////////////////////////////////////////////////////////////////////////

const jonas3 = {
    firstName3: 'Jonas',
    year3: 1991,
    calcAge3: function () {
        console.log(2037 - this.year3);

        function isMillenial3() {
            console.log(this);
            // console.log(this.year3 >= 1981 && this.year3 <= 1996);
        };
        isMillenial3();
    },
};
jonas3.calcAge3();

////////////////////////////////////////////////////////////////////////////////

const jonas4 = {
    firstName4: 'Jonas',
    year4: 1991,
    calcAge4: function () {
        console.log(2037 - this.year4);

        const self = this;  // self or that
        const isMillenial4 = function () {
            console.log(self);
            console.log(self.year4 >= 1981 && self.year4 <= 1996);
        };
        isMillenial4();
    },
};
jonas4.calcAge4();

////////////////////////////////////////////////////////////////////////////////

const jonas5 = {
    firstName5: 'Jonas',
    year5: 1991,
    calcAge5: function () {
        console.log(2037 - this.year5);

        const isMillenial5 = () => {
            console.log(this);
            console.log(this.year5 >= 1981 && this.year5 <= 1996);
        };
        isMillenial5();
    },
};
jonas5.calcAge5();

////////////////////////////////////////////////////////////////////////////////

// arguments keyword

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

// addArrow(2, 5, 8);
