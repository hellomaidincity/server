const Models = require('../models');

const registration = {};

registration.createUser = async (req) => {
  const user = {
    name: req.body.name,
    mobile: req.body.mobile,
    email: req.body.email,
    role: req.body.role,
    isActive: false,
  };
  return Models.User.create(user);
};

module.exports = registration;
