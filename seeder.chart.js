const axios = require('axios')
// const chartData = require('./chartdata.json')
const DB = require('./seeder.server')

const supabase = DB.supabase;


async function getChartData(stock, interval, range) {
    let url = `https://query1.finance.yahoo.com/v8/finance/chart/${stock}?region=US&lang=en-US&includePrePost=false&interval=${interval}&useYfid=true&range=${range}`
    axios.get(url).then((response) => {
        var chartData = response.data.chart.result[0];
        var timestamps = chartData.timestamp;


        var quotes = chartData.indicators.quote
        var low = quotes[0].low;
        var open = quotes[0].open;
        var close = quotes[0].close;
        var high = quotes[0].high;

        let chartArray = [];
        for (let i = 0; i < timestamps.length; i++) {
            var obj = {
                timestamp: timestamps[i], low: low[i], open: open[i], close: close[i], high: high[i],stock:stock
            }
            chartArray.push(obj);
        }

        supabase
            .from('chartdata')
            .insert(chartArray).then(async (quotes, err) => {
                if (err) {
                    console.log("error-----------------------------------");
                    return console.log(err);
                }
                console.log("quotes --------------------------------------");
                console.log(quotes);
            });

    }).catch((err) => {
        console.log(err);
    })

}


module.exports = {
    getChartData
}