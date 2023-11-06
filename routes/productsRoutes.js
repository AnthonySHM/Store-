// Import necessary modules
const express = require('express');
const router = express.Router();
//TASK_1: RESEARCH ABOUT ROUTES //  https://www.coreycleary.me/escaping-relative-path-hell
//const productsController = require('D:\Work\GitHub Projects\Store Project\controllers\ProductsController.js');
//productsController was wrong because you should acces to ProductsController but you needed use ".." to go back one folder anter that select "controllers" folder and "ProductsController" file
const productsController = require('../controllers/ProductsController');

// Define a route to get all products
router.get('/products', productsController.getAllProducts);
router.get('/product/:id', productsController.getProductById);

// Create a new route to insert a product
router.post('/products', productsController.insertProduct);

// Create a new route to delete a product by ID
router.delete('/products/:id', productsController.deleteProduct);

// Create a new route to update a product by ID
router.put('/products/:id', productsController.updateProduct);

// Create a new route to get products with comments
router.get('/products-with-comments', productsController.getProductsWithComments);



// Export the router to be used in the main Express application
module.exports = router;