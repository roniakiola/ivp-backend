'use strict';

const express = require('express');
const multer = require('multer');
const {
  upload_file,
  upload_formdata,
  get_all_files,
  get_single_file,
} = require('../controllers/uploadController');
const upload = multer({ dest: './uploads/' });
const router = express.Router();

router.route('/').post(upload.single('file'), upload_file).get(get_all_files);

router.route('/:formdata').post(upload.none(), upload_formdata);

router.route('/:id').get(get_single_file);

module.exports = router;
