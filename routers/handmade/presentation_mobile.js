const express = require('express');

const presentationmobileHandmadeRouter = express.Router();

presentationmobileHandmadeRouter
    .get('/', (req,res) => {
        res.render('handmade/presentation_mobile');
    })


module.exports = {
    presentationmobileHandmadeRouter,
}
