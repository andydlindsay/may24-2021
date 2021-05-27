// stolen from CoffeeScript
// const sayHello = function(name) {
//   console.log(`hello there ${name}`);
// };

// Pros
// less typing
// if only one argument, no need for parens
// if only one line of code, no need for curly braces
// if there's no curly braces, we have implicit return

// Cons
// they do not create `this`

// log: function() { console.log(this.quantity) }

const sayHello = name => `hello there ${name}`;

const returnVal = sayHello('Elise');
console.log('returnVal', returnVal);

const runMyFunction = function(anotherFunc) {
  anotherFunc('Elise');
};

runMyFunction((anythingIWant) => console.log(`hello there ${anythingIWant}`));

runMyFunction(function(name) {
  console.log(`hello there ${name}`);
});
