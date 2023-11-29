import express from "express";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";
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
  console.log("req:", req.body);
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user: any) => {
    if (user) {
      errors.email = "Email already exists.";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        rating: "pg",
        default: "mm",
      });

      // if user doesn't exist, need to create new User
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt: any) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user: any) => res.json(user))
            .catch((err: any) => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
