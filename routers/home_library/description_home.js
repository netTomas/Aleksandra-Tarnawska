const express = require('express');

const description_homeRouter = express.Router();

description_homeRouter
    .get('/', (req,res) => {
        res.render('home_library/description');
    })


module.exports = {
    description_homeRouter,
}
