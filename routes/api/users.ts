import express from "express";
const router = express.Router();

const keys = require("../../config/keys");

// import gravatar from 'gravatar'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'
// import passport from 'passport'

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// Load user model
const User = require("../../models/User");

// api/users/test
router.get("/test", (req, res) => res.json({ msg: "User works" }));

// api/users/register
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
});

module.exports = router;
