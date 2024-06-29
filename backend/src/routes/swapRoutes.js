const express = require('express');
const { listSwaps, createSwap, swapupload } = require('../controllers/swapController');

const router = express.Router();

router.get('/:productId', listSwaps);
router.post('/', swapupload.single('image'), createSwap); // Use the upload middleware here

module.exports = router;