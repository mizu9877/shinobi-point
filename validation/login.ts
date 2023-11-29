import Validator from "validator";
const isEmpty = require("./is-empty");

interface errorTypes {
  email: string;
  password: string;
}

const validateLoginInput = (data: errorTypes) => {
  let errors = {} as errorTypes;

  // Need to check the each item is empty...
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateLoginInput;
