const httpStatus = require('http-status');
const APIError = require('./APIError');

const handleError = (status, message) => {
  if (status === 400 || status === 'BAD_REQUEST_ERROR') {
    return new APIError({
      message,
      status: httpStatus.BAD_REQUEST,
    });
  }
  if (status === 401) {
    return new APIError({
      message,
      status: httpStatus.UNAUTHORIZED,
    });
  }
  if (status === 403) {
    return new APIError({
      message,
      status: httpStatus.FORBIDDEN,
    });
  }
  if (status === 404) {
    return new APIError({
      message,
      status: httpStatus.NOT_FOUND,
    });
  }
  if (status === 409) {
    return new APIError({
      message,
      status: httpStatus.CONFLICT,
    });
  }
  if (status === 412) {
    return new APIError({
      message,
      status: httpStatus.PRECONDITION_FAILED,
    });
  }
  if (status === 'GATEWAY_ERROR' || status === 'SERVER_ERROR') {
    return new APIError({
      message,
      status: httpStatus.INTERNAL_SERVER_ERROR,
    });
  }
  return new APIError({
    message: 'Service unavailable',
    status: httpStatus.INTERNAL_SERVER_ERROR,
  });
};

module.exports = { handleError };
