const express = require('express');

const homeRouter = express.Router();

homeRouter
    .get('/', (req,res) => {
        //res.redirect('/main');
        res.render('home/homepage');
    })



module.exports = {
    homeRouter,
}