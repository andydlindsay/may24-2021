const express = require('express');
const router = express.Router();
const productQueries = require('../db/product-queries');

// GET /products
router.get('/', (req, res) => {
  productQueries.getProducts()
    .then((products) => {
      // res.render('products', { products });
      res.json(products);
    });
});

// GET /products/new
router.get('/new', (req, res) => {
  res.render('new-product');
});

// GET /products/:id
router.get('/:id', (req, res) => {
  productQueries.getProductById(req.params.id)
    .then((product) => {
      res.render('product', { product });
    });
});

// POST /products
router.post('/', (req, res) => {
  const {productName, price} = req.body;
  productQueries.createProduct(productName, price)
    .then(() => {
      // res.redirect('/products');
      res.json({ success: true });
    });
});

// POST /products/:id
router.post('/:id', (req, res) => {
  const {productName, price} = req.body;
  productQueries.updateProduct(req.params.id, productName, price)
    .then(() => {
      // res.redirect(`/products/${req.params.id}`);
      res.json({ success: true });
    });
});

// POST /products/:id/delete
router.post('/:id/delete', (req, res) => {
  productQueries.deleteProduct(req.params.id)
    .then(() => {
      // res.redirect('/products');
      res.json({ success: true });
    });
});

module.exports = router;
