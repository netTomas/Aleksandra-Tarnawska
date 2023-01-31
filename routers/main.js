const express = require('express');

const mainRouter = express.Router();

mainRouter
    .get('/', (req,res) => {
        //res.send('Działa!');
        res.render('intro/intro');
    })

module.exports = {
    mainRouter,
}