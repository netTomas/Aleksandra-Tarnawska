const express = require('express');

const description_handmadeRouter = express.Router();

description_handmadeRouter
    .get('/', (req,res) => {
        res.render('handmade/description');
    })


module.exports = {
    description_handmadeRouter,
}
