const ProductModel = require('../models/productModel');
const multer = require('multer');
const path = require('path');

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
  const { name, description, owner } = req.body;
  const image = req.file ? req.file.path : null; // Assuming `req.file.path` holds the image path

  ProductModel.addProduct({ name, description, owner, image }, (err, result) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(201).json({ id: result.id, ...req.body, image });
    }
  });
}


// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory for storing uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
  }
});

const upload = multer({ storage: storage });

module.exports = {
  listProducts,
  createProduct,
  upload // Export the multer upload middleware
};
