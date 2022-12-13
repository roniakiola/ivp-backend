'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/uploadRoute');
const app = express();
const mongoose = require('mongoose');
const port = 3001;
const connectDB = require('./db/db.js');

app.use(cors());
app.use('/upload', uploadRoute);
app.use('/uploads', express.static(__dirname + '/uploads'));

connectDB();

mongoose.connection.once('open', () => {
  console.log('MongoDB connected');
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
});
