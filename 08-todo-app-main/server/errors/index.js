const CustomAPIError = require("./custom-api");
const UnauthenticatedError = require("./unauthnticated-error");
const NotFoundError = require("./not-found");
const BadRequestError = require("./bad-request");

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
};
