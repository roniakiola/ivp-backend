'use strict';

const upload_file = async (req, res) => {
  console.log('Upload succesful: ', req.body, req.file);
  res.json(req.body);
  //TODO: Upload files in MongoDB
};

module.exports = { upload_file };
