const changeToTen = function(num) {
  num = 10;
  console.log('inside the function', num);
};

const myNumber = 5;
console.log(myNumber);

changeToTen(myNumber);
console.log('after the function call', myNumber);

// primitives are passed "by value" they get copied

const changeMyObj = function(obj) {
  obj.name = 'Bob';
  console.log('inside the function', obj);
};

const myObj = {
  name: 'Alice'
};

console.log('before the function call', myObj);

changeMyObj(myObj);

console.log('after the function call', myObj);

// objects are passed "by reference" the function gets our actual object
