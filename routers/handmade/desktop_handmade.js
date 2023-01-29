const express = require('express');

const desktop_handmadeRouter = express.Router();

desktop_handmadeRouter
    .get('/', (req,res) => {
        res.render('handmade/desktop');
    })


module.exports = {
    desktop_handmadeRouter,
}
