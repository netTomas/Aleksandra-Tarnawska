const express = require('express');

const mocakRouter = express.Router();

mocakRouter
    .get('/', (req,res) => {
        //res.send('działam');
        res.render('mocak/mocak');
})


module.exports = {
    mocakRouter,
}

