const cartoonCharacters = ['Whacko', 'Yacko', 'Dot', 'Sponge Bob'];

// const changed = [];
// for (const character of cartoonCharacters) {
//   const saying = `hello there ${character}`;
//   changed.push(saying);
// }

// const changed = cartoonCharacters.map((character) => `hello there ${character}`);

// console.log(cartoonCharacters);
// console.log(changed);

const ourMap = (arr, callback) => {
  const output = [];

  for (const elem of arr) {
    const returnVal = callback(elem); // how are you doing
    output.push(returnVal);
  }

  return output;
};

const returnVal = ourMap(['Hewie', 'Dewie', 'Lewie'], (nephew) => {
  return `how are you doing today ${nephew}`;
});
console.log(returnVal);

console.log();

// const changed = ourMap(cartoonCharacters, (name) => `hello there ${name}`);

const sayHello = name => console.log(`hello there ${name}`);
const changed = ourMap(cartoonCharacters, sayHello);

console.log(cartoonCharacters);
console.log(changed);
