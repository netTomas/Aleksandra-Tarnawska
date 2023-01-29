const express = require('express');

const mobile_handmadeRouter = express.Router();

mobile_handmadeRouter
    .get('/', (req,res) => {
        res.render('handmade/mobile');
    })


module.exports = {
    mobile_handmadeRouter,
}
