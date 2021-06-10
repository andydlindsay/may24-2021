const math = {
  pi: 4.5,
  moreStuff: 'something-else'
};

const doSomething = (num, math) => {
  return num * math.pi;
};

doSomething(5, { pi: 4 }); // 16.3222
