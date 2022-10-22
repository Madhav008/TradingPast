const express = require('express');
const seeder = require('./seeder.server')
const axios = require('axios');
const chart  = require('./seeder.chart');
const { addData } = require('./seeder.onemin');
const app = express();

var PORT = 3001;


app.get('/chart/:stock/:interval/:range', (req, res) => {

    addData(req.params.stock)

    let url = `https://query1.finance.yahoo.com/v8/finance/chart/${req.params.stock}?region=US&lang=en-US&includePrePost=false&interval=${req.params.interval}&useYfid=true&range=${req.params.range}`
    axios.get(url).then((response) => {
        res.send(response.data.chart.result[0])
    }).catch((err) => {
        res.send(err)
    })

})



app.get('/stock:tiker', (req, res) => {
    seeder.setTiker(req.params.tiker);
    addData(req.params.tiker)
})


app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})