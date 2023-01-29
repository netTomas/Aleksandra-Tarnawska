const express = require('express');

const desktop_current_mocakRouter = express.Router();

desktop_current_mocakRouter
    .get('/', (req,res) => {
        res.render('mocak/current');
    })


module.exports = {
    desktop_current_mocakRouter,
}
