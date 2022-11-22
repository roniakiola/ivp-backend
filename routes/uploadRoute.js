'use strict';

const express = require('express');
const multer = require('multer');
const {
  upload_file,
  upload_formdata,
} = require('../controllers/uploadController');
const upload = multer({ dest: './uploads/' });
const router = express.Router();

router.route('/').post(upload.single('file'), upload_file);

router.route('/:formdata').post(upload.none(), upload_formdata);

module.exports = router;
