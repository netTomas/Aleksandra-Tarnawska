const express = require('express');

const desktop_homeRouter = express.Router();

desktop_homeRouter
    .get('/', (req,res) => {
        res.render('home_library/desktop');
    })


module.exports = {
    desktop_homeRouter,
}
