const express = require('express');

const analysis_mocakRouter = express.Router();

analysis_mocakRouter
    .get('/', (req,res) => {
        res.render('mocak/analysis');
    })


module.exports = {
    analysis_mocakRouter,
}
