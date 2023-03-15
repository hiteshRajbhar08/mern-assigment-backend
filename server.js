const express = require('express');
require('dotenv').config();
require('colors');
const cors = require('cors');
const connectDB = require('./config/db');

// connect database
connectDB();

// routes
const productRoutes = require('./routes/ProductRoute');

const app = express();

//  middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes middleware
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('API is running....');
});

// listen to server
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
