const mongoose = require('mongoose');

const { db } = require('../configs/config');

let uri = 'mongodb://';
uri = uri.concat(db.host).concat(':').concat(db.port);
uri = uri.concat('/').concat(db.name);

mongoose.connect(uri, (error) => {
  console.log('error ', error);
  // console.log(db);
});

const User = require('./user.js');

const Models = {
  User,
};

module.exports = Models;
