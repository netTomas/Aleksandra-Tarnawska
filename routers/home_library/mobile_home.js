const express = require('express');

const mobile_homeRouter = express.Router();

mobile_homeRouter
    .get('/', (req,res) => {
        res.render('home_library/mobile');
    })


module.exports = {
    mobile_homeRouter,
}
