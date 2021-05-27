// const myNum = 5;
// const otherNum = myNum;
// console.log(otherNum);

// function declaration
// function sayHello() {}

// function expression
// expression === something that evaluates to a value
// const sum = 2 + 2
const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const addTwo = function(num) {
  console.log(num + 2);
};

const myFuncs = [sayHello, addTwo];

myFuncs[0]('Dean');

// const printSomethingToTheConsole = console.log;
// printSomethingToTheConsole('does this still work?????');

const anotherVariable = sayHello;

anotherVariable.secretMessage = 'is anyone listening?';
console.log(anotherVariable);

// console.log('is it undef?', anotherVariable.toString());

// anotherVariable('Carol');
