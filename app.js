'use strict';

const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/uploadRoute');
const app = express();
const port = 3001;

app.use(cors());

app.use('/upload', uploadRoute);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
