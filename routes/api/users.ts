import express from 'express'
const router = express.Router()

const keys = require('../../config/keys');

// Load user model
const User = require("../../models/User");