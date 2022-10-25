const express = require('express');
const seeder = require('./seeder.server')
const axios = require('axios');
const { addData } = require('./seeder.onemin');
const app = express();
var cors = require('cors')
var PORT = 3001;

app.use(cors())

function convertTime(dateStr){
    const date = new Date(dateStr);       
    const unixTimestamp = Math.floor(date.getTime());
    console.log(unixTimestamp)
    return unixTimestamp;
}
app.get('/groww/s=:start/e=:end/i=:interval/s=:stock', (req, res) => {

    let { start, end, interval, stock } = req.params;
    
    start = convertTime(start)
    end = convertTime(end)

    let url = `https://groww.in/v1/api/charting_service/v2/chart/exchange/NSE/segment/CASH/${stock}?endTimeInMillis=${end}&intervalInMinutes=${interval}&startTimeInMillis=${start}`
    console.log(url);
    axios.get(url).then((e) => {
        var quotes = e.data.candles;

        res.send(quotes.map((resp) => {
            return { time: resp[0], open: resp[1], high: resp[2], low: resp[3], close: resp[4] }
        }))

    }).catch((err) => {
        res.send(err)
    })
})


app.get('/chart/:stock', (req, res) => {
    let interval = '1h';
    let range = '1mo';
    let chartArray = [];

    let url = `https://query1.finance.yahoo.com/v8/finance/chart/${req.params.stock}?region=US&lang=en-US&includePrePost=false&interval=${interval}&useYfid=true&range=${range}`
    axios.get(url).then((response) => {

        var timestamps = response.data.chart.result[0].timestamp;
        var quotes = response.data.chart.result[0].indicators.quote;
        var low = quotes[0].low;
        var open = quotes[0].open;
        var close = quotes[0].close;
        var high = quotes[0].high;

        for (let i = 0; i < timestamps.length; i++) {
            var obj = {
                time: timestamps[i], open: open[i], high: high[i], low: low[i], close: close[i],
            }
            chartArray.push(obj);
        }
        res.send(chartArray)
    }).catch((err) => {
        res.send(err)
    })
})












app.get('/chart/:stock/:interval/:range', (req, res) => {

    addData(req.params.stock)

    let url = `https://query1.finance.yahoo.com/v8/finance/chart/${req.params.stock}?region=US&lang=en-US&includePrePost=false&interval=${req.params.interval}&useYfid=true&range=${req.params.range}`
    axios.get(url).then((response) => {
        res.send(response.data.chart.result[0])
    }).catch((err) => {
        res.send(err)
    })

})


app.get('/stock/:tiker', (req, res) => {
    seeder.setTiker(req.params.tiker);
    addData(req.params.tiker)
    console.log("ok")
})


app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})