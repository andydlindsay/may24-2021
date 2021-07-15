class Obj {
  constructor() {
    this.name = 'Andy';
    this.sayHello = this.sayHello.bind({ name: 'Carol' });
  }

  sayHello() {
    console.log(`hello ${this.name}`);
    console.log(this);
  }
}

const obj = new Obj();
obj.sayHello();
