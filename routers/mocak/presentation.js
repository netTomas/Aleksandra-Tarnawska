const express = require('express');

const presentationMocakRouter = express.Router();

presentationMocakRouter
    .get('/', (req,res) => {
        res.render('mocak/presentation');
    })


module.exports = {
    presentationMocakRouter,
}

