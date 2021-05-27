const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

// sayHello('Alice');
// sayHello('Bob');
// const storedName = 'Carol';
// sayHello(storedName);

const addTwo = function(num) {
  console.log(num + 2);
};

const runMyFunction = function(anotherFunc) {
  console.log(anotherFunc);
  anotherFunc.secretMessage = 'awesome';
  // console.log(anotherFunc.toString());
  anotherFunc('Bob'); // addTwo('Bob');
};

// const returnVal = sayHello('Carol');
// runMyFunction(returnVal);

runMyFunction(sayHello);
runMyFunction(addTwo);

console.log(sayHello);

// assertEqArrays(middle([1,2,3]), [2]);
