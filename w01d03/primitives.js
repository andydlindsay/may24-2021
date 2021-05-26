// primitives
const str = 'string';
const num = 7;
const bool = false;
const nul = null;
const undef = undefined;
const symb = Symbol('hello');
const bigint = 8469832n;

// primitives are immutable (cannot be changed)
let greeting = 'hello world';
console.log(greeting);
greeting.replace('hello', 'hola');
console.log(greeting);

greeting = 'something else';
console.log(greeting);

// not primitives
const arr = [];
const obj = {};