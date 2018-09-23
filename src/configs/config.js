const path = require('path');

require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  host: process.env.HOST,

  // auth: {
  //   BASE_URL: process.env.AUTH_BASE_URL, //  || 'http://35.200.213.231/api'
  //   endpoints: {
  //     VERIFY_TOKEN: '/api/client/verify',
  //   },
  // },

  // razorpay: {
  //   key_id: process.env.RAZORPAY_KEY_ID,
  //   key_secret: process.env.RAZORPAY_KEY_SECRET,
  // },

  // test: {
  //   header_key: process.env.TEST_HEADER_KEY,
  //   header_value: process.env.TEST_HEADER_VALUE,
  // },

  db: {
    // user: process.env.DATABASE_USER || 'root',
    // password: process.env.DATABASE_PASSWORD || 1234,
    name: process.env.DATABASE_NAME || 'my_database',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: process.env.DATABASE_PORT || 27017,
  },
};
