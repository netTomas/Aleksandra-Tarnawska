const express = require('express');

const presentationmobileMocakRouter = express.Router();

presentationmobileMocakRouter
    .get('/', (req,res) => {
        res.render('mocak/presentation_mobile');
    })


module.exports = {
    presentationmobileMocakRouter,
}
