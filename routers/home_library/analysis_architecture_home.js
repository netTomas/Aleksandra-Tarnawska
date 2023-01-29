const express = require('express');

const analysis_architecture_homeRouter = express.Router();

analysis_architecture_homeRouter
    .get('/', (req,res) => {
        res.render('home_library/architecture');
    })


module.exports = {
    analysis_architecture_homeRouter,
}
