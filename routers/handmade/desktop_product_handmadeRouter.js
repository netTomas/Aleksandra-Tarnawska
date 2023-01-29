const express = require('express');

const desktop_product_handmadeRouter = express.Router();

desktop_product_handmadeRouter
    .get('/', (req,res) => {
        res.render('handmade/product');
    })


module.exports = {
    desktop_product_handmadeRouter,
}
