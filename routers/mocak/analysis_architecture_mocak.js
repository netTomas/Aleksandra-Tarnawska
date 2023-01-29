const express = require('express');

const analysis_architecture_mocakRouter = express.Router();

analysis_architecture_mocakRouter
    .get('/', (req,res) => {
        res.render('mocak/architecture');
    })


module.exports = {
    analysis_architecture_mocakRouter,
}
