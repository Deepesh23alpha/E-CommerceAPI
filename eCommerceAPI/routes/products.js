// ---Importing Package---
const express = require("express");
const router = express.Router();

// Importing Controller
const productController = require('../controller/product.controller.js');

//  Creating routes.
router.get('/', productController.getProducts);
router.post('/create', productController.create);
router.post('/:id/quant', productController.update);
router.delete('/:id', productController.delete);

// Exporting Router
module.exports = router;