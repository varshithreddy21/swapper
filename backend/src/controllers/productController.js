const ProductModel = require('../models/productModel');

function listProducts(req, res) {
  ProductModel.getAllProducts((err, products) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(200).json(products);
    }
  });
}

function createProduct(req, res) {
  ProductModel.addProduct(req.body, (err, result) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(201).json({ id: result.id, ...req.body });
    }
  });
}

module.exports = {
  listProducts,
  createProduct
};