const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const index = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).send({ 'msg': "Welcome to Auth api" });
});


module.exports = {
  index
};
