const joi = require("joi");
const { pattern } = require("../config/config");

// this function will check the req.body and if all params validate will return them else will throw an error with missing
const signInSchema = joi.object({
  username: joi
    .string()
    .pattern(pattern.username)
    .message("Please fill a valid username")
    .required()
    .lowercase()
    .trim(),
  password: joi
    .string()
    .pattern(pattern.password)
    .message("Please fill a valid password")
    .required(),
  rememberMe: joi.boolean().default(false).optional(),
});

// this function will check the req.body and if all params validate will return them else will throw an error with missing
const signUpSchema = joi.object({
  username: joi
    .string()
    .pattern(pattern.username)
    .message("Please fill a valid username")
    .required()
    .lowercase()
    .trim(),
  email: joi
    .string()
    .pattern(pattern.email)
    .message("Please fill a valid email")
    .required()
    .lowercase()
    .trim(),
  password: joi
    .string()
    .pattern(pattern.password)
    .message("Please fill a valid password")
    .required(),
});

// this function will check the req.body and if all params validate will return them else will throw an error with missing
const confirmAccountSchema = joi.object({
  token: joi
    .string()
    .pattern(pattern.jwtToken)
    .message("Invalid token")
    .required(),
});

// this function will check the req.body and if all params validate will return them else will throw an error with missing
const forgotPasswordSchema = joi.object({
  email: joi
    .string()
    .pattern(pattern.email)
    .message("Please fill a valid email")
    .required(),
});

// this function will check the req.body and if all params validate will return them else will throw an error with missing
const resetPasswordSchema = joi.object({
  token: joi
    .string()
    .pattern(pattern.jwtToken)
    .message("Please fill a valid token")
    .required(),
  password: joi
    .string()
    .pattern(pattern.password)
    .message("Please fill a valid password")
    .required(),
});

// this function will check the req.body and if all params validate will return them else will throw an error with missing
const reSendConfirmationSchema = joi.object({
  email: joi
    .string()
    .pattern(pattern.email)
    .message("Please fill a valid email")
    .required(),
});
module.exports = {
  signInSchema,
  signUpSchema,
  confirmAccountSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  reSendConfirmationSchema,
};