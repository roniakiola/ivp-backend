'use strict';

const express = require('express');
const multer = require('multer');
const { upload_file } = require('../controllers/uploadController');
const upload = multer({ dest: './uploads/' });
const router = express.Router();

router.route('/').post(upload.single('file'), upload_file);

module.exports = router;
