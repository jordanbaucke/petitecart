/**
 * Setup routes and other middleware
 */
const express = require('express');
const products = require("./routes/product");

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/products', products);
}