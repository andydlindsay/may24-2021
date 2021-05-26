// method === function inside an object

let favouriteFood = {
  flavour: 'spicy',
  texture: 'moshy/crunchy',
  name: 'hot cereal burrito',
  quantity: 10,

  eatSome: function(amountBeingEaten) {
    this.quantity = this.quantity - amountBeingEaten;
  },
  buySome: function(amountPurchased) {
    this.quantity += amountPurchased;
  },
  changeFlavour: function(newFlavour) {
    this.flavour = newFlavour;
  },
  printMe: function() {
    console.log(`I am a ${this.flavour} food called ${this.name} and most people like me because I am ${this.texture}`);
  }
};

const somethingElse = favouriteFood;
favouriteFood = null;

somethingElse.eatSome(4);
console.log(somethingElse);

somethingElse.printMe();
