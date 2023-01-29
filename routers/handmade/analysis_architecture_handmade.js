const express = require('express');

const analysis_architecture_handmadeRouter = express.Router();

analysis_architecture_handmadeRouter
    .get('/', (req,res) => {
        res.render('handmade/architecture');
    })


module.exports = {
    analysis_architecture_handmadeRouter,
}
