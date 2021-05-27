const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

// sayHello('Alice');

// const firstName = 'Bob';
// sayHello(firstName);

const runMyFunction = function(anotherFunc) {
  anotherFunc('Elise');
};

// runMyFunction(sayHello);

runMyFunction(function(name) {
  console.log(`hello there ${name}`);
});
