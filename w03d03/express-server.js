const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 6543;

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
