import express from 'express'
const router = express.Router()

const keys = require('../../config/keys');

// import gravatar from 'gravatar'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'
// import passport from 'passport'

// Load user model
const User = require("../../models/User");

// api/users/test
router.get('/test', (req, res) => res.json({ msg: "User works" }))

module.exports = router;
