const express = require('express');

const analysis_handmadeRouter = express.Router();

analysis_handmadeRouter
    .get('/', (req,res) => {
        res.render('handmade/analysis');
    })


module.exports = {
    analysis_handmadeRouter,
}
