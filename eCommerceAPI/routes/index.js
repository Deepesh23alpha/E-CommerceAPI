// ---Importing Package---
const express = require("express");
const router = express.Router();

// ---Importing controller---
const homeController = require('../controller/home.controller.js');

// Creating routes.
router.get('/', homeController.home);
router.use('/products', require('./products'));

// Exporting router
module.exports = router;