const express = require('express');

const analysis_homeRouter = express.Router();

analysis_homeRouter
    .get('/', (req,res) => {
        res.render('home_library/analysis');
    })


module.exports = {
    analysis_homeRouter,
}
