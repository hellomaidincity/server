const router = require('express-promise-router')();
const registration = require('./registration');

router.use('/', registration);

module.exports = router;
