const swapModel = require('../models/swapModel');
const multer = require('multer');
const path = require('path');

function listSwaps(req, res) {
  const {swapproduct}= req.params.productId; 
  swapModel.getAllSwaps(swapproduct,(err, swaps) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(200).json(swaps);
    }
  });
}

function createSwap(req, res) {
  const { name, description, owner, product_id } = req.body;
  const image = req.file ? req.file.path : null; // Assuming `req.file.path` holds the image path

  swapModel.addSwap({ name, description, owner, product_id, image }, (err, result) => {
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
      cb(null, 'swapuploads/'); // Specify the directory for storing uploaded swap images
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
    }
  });
  
  const swapupload = multer({ storage: storage });
  
  module.exports = {
    listSwaps,
    createSwap,
    swapupload // Export the multer upload middleware
  };
  