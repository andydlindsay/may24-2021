const express = require('express');
const morgan = require('morgan');

// create our server
const app = express();

// middleware
// app.use((req, res, next) => {
//   console.log(`first incoming request for ${req.method} ${req.url}`);
//   // req.cookies = myFuncThatParsesCookies();
//   // res.send('all done from inside the middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log(`second incoming request for ${req.method} ${req.url}`);
//   // res.send('all done from inside the middleware');
//   next();
// });

// const morganMiddleware = morgan('dev'); // (req, res, next) => {}
// app.use(morganMiddleware);

app.use(morgan('dev'));

// add listeners (callbacks) for routes

// GET /home
app.get('/home', (req, res) => {
  // res.status(201);
  // res.send('welcome to the express home page');

  res.status(201).send('welcome to the express home page');

  // req.cookies;
  // res .send .sendFile .render .json
});

// GET /about
app.get('/about', (req, res) => {
  res.send('this is the about page from express');
});

// tell our app to listen on a particular port
const port = 55555;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
