const studentOne = 'Alice';
const cohort = 'May 24 2021';
// const hasDog = true;

const student = [
  'Alice', 
  'May 24 2021', 
  true
];
console.log(student[2]);

// objects
// collections of key/value pairs
// hash, dictionaries, associative arrays
// key/index is always a string

// const studentObj = { 'name': 'Alice', cohort: 'May 24 2021', hasDog: true };

const studentObj = {
  'name': 'Alice',
  cohort: 'May 24 2021',
  hasDog: true,
  log: function() {}
};

// studentObj = {};

console.log(studentObj);
delete studentObj.log
console.log(studentObj);

// const myFunc = function() {};
// const sum = 2 + 2;

// studentObj.log();

const myKey = 'hasDog';
// square bracket syntax
console.log('hasDog', studentObj['hasDog']);
console['log']('hasDog', studentObj.myKey);

// dot syntax
console.log('name', studentObj.name);

// if we know the name of the key, use dot syntax
// if we don't (if it's dynamic), use square bracket

// const firstName = 'Alice';
// console.log(firstName);
// console.log('Alice');
