const express = require('express');
const { listProducts, createProduct, upload } = require('../controllers/productController');

const router = express.Router();

router.get('/', listProducts);
router.post('/', upload.single('image'), createProduct); // Use the upload middleware here

module.exports = router;