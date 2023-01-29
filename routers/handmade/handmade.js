const express = require('express');

const handmadeRouter = express.Router();

handmadeRouter
    .get('/', (req,res) => {
        //res.send('działam');
        res.render('handmade/handmade');
})


module.exports = {
    handmadeRouter,
}

