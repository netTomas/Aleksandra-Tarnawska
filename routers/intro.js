const express = require('express');

const introRouter = express.Router();

introRouter
    .get('/', (req,res) => {
        res.redirect('/main');

    })

module.exports = {
    introRouter,
}