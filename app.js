'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/uploadRoute');
const app = express();
const mongoose = require('mongoose');
const port = 3001;

app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log(err);
  }
};

connectDB();

app.use('/upload', uploadRoute);

mongoose.connection.once('open', () => {
  console.log('MongoDB connected');
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
});
