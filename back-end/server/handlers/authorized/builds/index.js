'use strict';

var express = require('express');
var controller = require('./builds.controller.js');

var router = express.Router();

router.post('/run', controller.runBuild);
router.get('/get/:name', controller.getBuildByName);

module.exports = router;