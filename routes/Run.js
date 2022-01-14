var express = require('express');
var Compiler = require('../models/Compiler.js');

const router = express.Router();

router.post('/', Compiler);

module.exports =  router;