class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
};

// const Rectangle = class {};

const rectangle = new Rectangle(5, 3);
console.log(rectangle.area());

class Prism extends Rectangle {
  constructor(width, height, length) {
    super(width, height);
    this.length = length;
  }

  volume() {
    return this.area() * this.length;
  }
}

const prism = new Prism(3, 4, 5);
console.log(prism.volume());
