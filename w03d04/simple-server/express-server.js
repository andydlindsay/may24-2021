const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = process.env.PORT || 6543;

const languages = require('./languages.json');

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const generateId = () => {
  return uuidv4().split('-')[1];
};

const users = {
  'abcd': {
    id: 'abcd',
    email: 'jstamos@mail.com',
    password: 'abc'
  }
};

const urls = {
  'abcd': {
    shortUrl: 'abnab',
    longUrl: 'adshfkahsdf',
    userId: 'abcd'
  }
};

// /languages/fr
app.get('/languages/:chosenLanguage', (req, res) => {
  const languagePref = req.params.chosenLanguage;

  res.cookie('languagePref', languagePref);

  res.redirect('/');
});

app.get('/about', (req, res) => {
  const languagePref = req.cookies.languagePref || 'so';

  const templateVars = {
    heading: languages.aboutHeadings[languagePref],
    body: languages.aboutBodies[languagePref]
  };

  res.render('about', templateVars);
});

app.get('/', (req, res) => {
  const languagePref = req.cookies.languagePref || 'so';

  const templateVars = {
    heading: languages.homeHeadings[languagePref],
    body: languages.homeBodies[languagePref]
  };

  res.render('home', templateVars);
});

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// GET /protected
app.get('/protected', (req, res) => {
  const userId = req.cookies.userId;
  if (!userId) {
    res.status(401).send('you are not authorized to be here');
  }

  const user = users[userId];
  res.render('protected', { user }); 
});

// POST /login
app.post('/login', (req, res) => {
  // pull the info off the body
  const email = req.body.email;
  const password = req.body.password;

  // look up the user
  let foundUser;

  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      foundUser = user;
    }
  }

  // if there's no user with that email, send back an error response
  if (!foundUser) {
    res.status(401).send('could not find user with that email');
  }

  // compare the user's password
  if (foundUser.password !== password) {
    // if the passwords don't match, send back an error response
    res.status(401).send('password is not correct');
  }

  // set the cookie and redirect to the protected page
  res.cookie('userId', foundUser.id);
  res.redirect('/protected');
});

// POST /register
app.post('/register', (req, res) => {
  // grab the information from the body
  const password = req.body.password;
  const email = req.body.email;

  if (!password || !email) {
    return res.status(401).send('you must enter an email AND a password');
  }

  // create our new user object
  const newUserId = generateId();

  const newUser = {
    id: newUserId,
    email,
    password
  }

  // add our new user to the users object
  users[newUserId] = newUser;
  console.log(users);

  // redirect the user to the login page
  res.redirect('/login');
});

// POST /logout
app.post('/logout', (req, res) => {
  res.clearCookie('userId');
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
