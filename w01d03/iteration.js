const favouriteFood = {
  flavour: 'spicy',
  texture: 'moshy/crunchy',
  name: 'hot cereal burrito',
  quantity: 10
};

// for (const songId in songs) {
//   songs[songId]
// }

const soughtAfter = 'hot cereal burrito';

for (const noMagicHere in favouriteFood) {
  // console.log('noMagicHere', noMagicHere);
  // console.log('value', favouriteFood[noMagicHere]);

  const value = favouriteFood[noMagicHere];
 
  if (value === soughtAfter) {
    console.log('found it!!!', noMagicHere);
  }
}

// const faveFoods = ['hot cereal', 'burrito'];

// for (const food of faveFoods) {
//   console.log(food);
// }

// console.log();

// for (const index in faveFoods) {
//   console.log(index);
//   const value = faveFoods[index];
// }