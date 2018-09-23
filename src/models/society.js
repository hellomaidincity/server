const mongoose = require('mongoose');

// const { roles } = require('../configs/constant');

const societySchema = mongoose.Schema({
  _id: String,
  name: String,
  address: String,
  city: String,
});

const Society = mongoose.model('Society', societySchema);

module.exports = Society;
