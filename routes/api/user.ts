// const express = require("express");
// const router = express.Router();
const keys = require("../../config/keys");

const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const 