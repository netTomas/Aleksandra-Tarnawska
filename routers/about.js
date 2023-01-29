const express = require('express');

const aboutRouter = express.Router();

aboutRouter
    .get('/', (req,res) => {
        res.render('about/about');
    })

module.exports = {
    aboutRouter,
}