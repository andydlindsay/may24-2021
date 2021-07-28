const sayHello = (name: string, age?: number): void => {
  console.log(`hello there ${name} you are ${age}`);
};

sayHello('Alice', 42);
sayHello('Alice');

const returningPromise = (name: string): Promise<string> => {
  return new Promise((resolve) => {
    resolve(name);
  });
};

const higherOrderFunc = (callback: (num: number) => string): void => {
  callback(5);
};

// app.get('/', (req, res) => {})
