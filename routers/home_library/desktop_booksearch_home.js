const express = require('express');

const desktop_booksearch_homeRouter = express.Router();

desktop_booksearch_homeRouter
    .get('/', (req,res) => {
        res.render('home_library/booksearch');
    })


module.exports = {
    desktop_booksearch_homeRouter,
}
