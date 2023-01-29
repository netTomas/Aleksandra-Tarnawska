const express = require('express');

const homelibraryRouter = express.Router();

homelibraryRouter
    .get('/', (req,res) => {
        res.render('home_library/homelibrary');
})


module.exports = {
    homelibraryRouter,
}

