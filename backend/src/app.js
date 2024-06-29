const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const swapRoutes=require('./routes/swapRoutes')

const app = express();
const PORT = process.env.PORT || 4001;

const corsOptions = {
  origin: '*', // Allow all origins
  methods: '*', // Allow all methods
  allowedHeaders: '*', // Allow all headers
  credentials: true, // If you need to allow cookies or authorization headers
  optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
// Configure CORS to allow all origins and headers
app.use(cors(corsOptions));

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json());

// Use product routes
app.use('/uploads', express.static('uploads')); // Serve static files from the uploads directory
app.use('/api/products', productRoutes);
app.use('/api/swaps', swapRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
