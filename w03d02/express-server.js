const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const port = process.env.PORT || 55555;
// Resource - articles

// Article:
// * title
// * image
// * text
// * author

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

const articles = {
  abcd: {
    title: 'Kangaroo Boxing',
    image: 'https://ychef.files.bbci.co.uk/624x351/p04lwmtz.jpg',
    text: 'More awesome stuff about kangaroo boxing',
    author: 'Kangaroos'
  },
  efgh: {
    title: 'Movies Involving Kangaroos',
    image: 'https://www.syfy.com/sites/syfy/files/styles/1170xauto/public/warriors_of_virtue_tsun_promotional_poster.jpg',
    text: 'Movies that involve kangaroos in some way',
    author: 'Casey Wood'
  },
};

// Browse  GET  /articles
app.get('/articles', (req, res) => {
  // res.json(articles);
  const templateVars = {
    articles
  };

  res.render('articles', templateVars);
});

app.get('/articles/new', (req, res) => {
  res.render('new-article');
});

// Read    GET  /articles/:id  /articles/abcd
// maps/:map_id/pins/:pin_id
app.get('/articles/:whatever', (req, res) => {
  console.log('params', req.params);
  const key = req.params.whatever;
  const article = articles[key];
  const templateVars = { article };

  res.render('article', templateVars);
});

// Edit    POST /articles/:id

// Add     POST /articles
app.post('/articles', (req, res) => {
  const newArticle = req.body;
  const newArticleId = uuidv4().split('-')[1];

  articles[newArticleId] = newArticle;

  // res.render('articles', { articles });
  res.redirect('/articles');
});

// Delete  POST /articles/:id/delete
app.post('/articles/:id/delete', (req, res) => {
  const idToBeDeleted = req.params.id;
  delete articles[idToBeDeleted];

  res.redirect('/articles');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
