const mongoose = require('mongoose');

const { roles } = require('../configs/constant');

const userSchema = mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  role: {
    type: String,
    enum: roles,
  },
  otp: Number,
  otpExpiry: Date,
  isActive: Boolean,
  profilePicture: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
