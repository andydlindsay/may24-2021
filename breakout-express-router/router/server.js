require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const db = require('./db/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

const productRouter = require('./routes/product-router');
const postRouter = require('./routes/post-router');

app.use('/api/products', productRouter);
app.use('/api/posts', postRouter(db));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
