const mongoose = require('mongoose');

// const { roles } = require('../configs/constant');

const clientSchema = mongoose.Schema({
  _id: String,
  flatNo: String,
  floorNo: String,
  maidId: String,
  societyId: String,
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
