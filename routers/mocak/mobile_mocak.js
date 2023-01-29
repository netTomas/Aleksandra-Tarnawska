const express = require('express');

const mobile_mocakRouter = express.Router();

mobile_mocakRouter
    .get('/', (req,res) => {
        res.render('mocak/mobile');
    })


module.exports = {
    mobile_mocakRouter,
}
