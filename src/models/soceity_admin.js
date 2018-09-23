const mongoose = require('mongoose');

// const { roles } = require('../configs/constant');

const societyAdminSchema = mongoose.Schema({
  _id: String,
  societyId: String,
  status: String,
});

const SocietyAdmin = mongoose.model('SocietyAdmin', societyAdminSchema);

module.exports = SocietyAdmin;
