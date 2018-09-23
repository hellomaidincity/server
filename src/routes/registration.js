const router = require('express-promise-router')();

const registration = require('../services/registration');

router.post('/registration', /* [authenticateClient], */ async (req, res) => {
  // if (!addGatewayValidate(req.body)) {
  //   // console.log('Add gateway error');
  //   throw constructError(addGatewayValidate.errors);
  // }
  return res.status(201).json(await registration.createUser(req));
});

module.exports = router;
