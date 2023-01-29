const express = require('express');

const presentationHandmadeRouter = express.Router();

presentationHandmadeRouter
    .get('/', (req,res) => {
        res.render('handmade/presentation');
    })


module.exports = {
    presentationHandmadeRouter,
}

