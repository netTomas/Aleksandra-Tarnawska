const express = require('express');

const description_mocakRouter = express.Router();

description_mocakRouter
    .get('/', (req,res) => {
        res.render('mocak/description');
    })


module.exports = {
    description_mocakRouter,
}
