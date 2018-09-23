const mongoose = require('mongoose');

// const { roles } = require('../configs/constant');

const maidSchema = mongoose.Schema({
  _id: String,
  societyId: {
    type: String,
    // unique: true, //uncommenct it, if one maid can occupy only one society.
  },
  status: String,
});

const Maid = mongoose.model('Maid', maidSchema);

module.exports = Maid;
