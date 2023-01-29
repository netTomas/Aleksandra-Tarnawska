const express = require('express');

const presentationmobileRouter = express.Router();

presentationmobileRouter
    .get('/', (req,res) => {
        res.render('home_library/presentation_mobile');
    })


module.exports = {
    presentationmobileRouter,
}
