const express = require('express');

const presentationRouter = express.Router();

presentationRouter
    .get('/', (req,res) => {
        res.render('home_library/presentation');
    })


module.exports = {
    presentationRouter,
}

