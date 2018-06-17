
const express = require('express');
const { Product } = require('../models/product')

const router = express.Router();



/**
 * GET all
 */
router.get('/', (req, res) => {
    Product.find().sort('name').then(function (products, err) {
        res.send(products)
    })
});


/**
 * POST
 */
router.post('/', (req, res) => {

    const product = new Product({ name: req.body.name, description: req.body.description, price: req.body.price });

    product.save(product, err => {
        return res.send(product);
    })

});


module.exports = router;