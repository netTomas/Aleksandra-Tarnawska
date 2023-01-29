const express = require('express');

const desktop_mocakRouter = express.Router();

desktop_mocakRouter
    .get('/', (req,res) => {
        res.render('mocak/desktop');
    })


module.exports = {
    desktop_mocakRouter,
}
