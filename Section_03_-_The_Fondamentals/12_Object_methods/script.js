'use strict';

const jonasObject = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function (birthYeah) {
    return 2037 - birthYeah;
  }
};

console.log(jonasObject);
console.log(jonasObject.calcAge(1991));
console.log(jonasObject['calcAge'](1991));
console.log(jonasObject.calcAge(jonasObject.birthYeah));
console.log(jonasObject['calcAge'](jonasObject.birthYeah));

const jonasObject2 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYeah;
  }
};

console.log(jonasObject2);
console.log(jonasObject2.calcAge());
console.log(jonasObject2['calcAge']());

const jonasObject3 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },
};

console.log(jonasObject3);
console.log(jonasObject3.calcAge());
console.log(jonasObject3.age);

// Challenge
// "Jonas is a 45-year old teacher, and he has a driver's license"
const jonasObject4 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `Summary info: ${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  },
};
console.log(jonasObject4.getSummary());
