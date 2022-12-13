'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const videoDataSchema = new Schema([], { strict: false });
const videoData = mongoose.model('VideoData', videoDataSchema);

const upload_file = async (req, res) => {
  if (!req.file) {
    res.json('no data');
    console.log('no data');
  } else {
    console.log('Upload succesful: ', req.file);
    res.json(req.file.destination + req.file.filename);
  }
};

const upload_formdata = async (req, res) => {
  console.log('Formdata uploaded: ', req.body);
  let data = JSON.parse(req.body.inputdata);
  console.log(data);
  res.json(data);

  let uploadData = new videoData(data);
  uploadData.save();
  console.log('New Data Saved succesfully');
};

const get_all_files = async (req, res) => {
  const result = await videoData.find();
  console.log(result[0]);
  res.json(result);
};

const get_single_file = async (req, res) => {
  const result = await videoData.findById(req.params.id);
  console.log(result);
  res.json(result);
};

module.exports = {
  upload_file,
  upload_formdata,
  get_all_files,
  get_single_file,
};
