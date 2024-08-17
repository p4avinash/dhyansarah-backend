import { Request, Response } from "express";

import { body, validationResult } from "express-validator";

/**
 * Validation rules for user registration
 */
export const validateUserRegistration = [
  body("lastName")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3 })
    .withMessage("Last name must be at least 3 characters long"),
  body("firstName")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters long"),
  body("email").isEmail().withMessage("Must be a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/\d/)
    .withMessage("Password must contain a number"),
];

/* Validation rules for user login */
export const validateUserLogin = [
  body("email").isEmail().withMessage("Must be a valid email address"),
  body("password").not().isEmpty().withMessage("Password cannot be empty"),
];

/* Validation rules for user login */
export const validateUpdateUser = [
  body("email").isEmail().withMessage("Must be a valid email address"),
  body("password").not().isEmpty().withMessage("Password cannot be empty"),
];

/* Middleware to handle validation result */
export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: Function
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
