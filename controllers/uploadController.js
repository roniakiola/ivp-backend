'use strict';

const upload_file = async (req, res) => {
  if (!req.file) {
    res.json('no data');
    console.log('no data');
  } else {
    console.log('Upload succesful: ', req.file);
    res.json(req.file.destination + req.file.filename);
    //TODO: Upload files in MongoDB
  }
};

const upload_formdata = async (req, res) => {
  console.log('Formdata uploaded: ', req.body);
  res.json(req.body);
};

module.exports = { upload_file, upload_formdata };
