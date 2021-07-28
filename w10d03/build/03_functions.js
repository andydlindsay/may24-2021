"use strict";
const sayHello = (name, age) => {
    console.log(`hello there ${name} you are ${age}`);
};
sayHello('Alice', 42);
sayHello('Alice');
const returningPromise = (name) => {
    return new Promise((resolve) => {
        resolve(name);
    });
};
const higherOrderFunc = (callback) => {
    callback(5);
};
// app.get('/', (req, res) => {})
