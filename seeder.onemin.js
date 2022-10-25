const { supabase } = require("./seeder.server");
var CronJob = require('cron').CronJob;
var chart = require('./seeder.chart');
const { getDays } = require("./datediff");





// i want to get chart data after every 7days and not stored in the database

async function getStocksList() {
    const { data: names, error } = await supabase.from('stocks').select('name');
    console.log(names)
    return names
}


async function addStocksList(stockname) {
    await supabase.from('stocks').insert([{ name: stockname }]);

}

async function addChartData(stockname) {
    chart.getChartData(stockname, '1m', '7d')
}


async function checkStockExist(stockname) {
    const { data, error } = await supabase.from('stocks').select('*').eq('name', stockname);

    if (data.length == 0) {
        return false;
    }

    return true;
}


async function checkOverWeek(stockname) {
    const { data: name, error } = await supabase.from('stocks').select('created_at').eq('name', stockname)

    if (getDays(name[0].created_at) > 7) {
        return true;
    }

    return false;
}


async function addData(stockTiker) {
    const isexists = await checkStockExist(stockTiker);

    if (isexists == false) {
        await addStocksList(stockTiker)
        await addChartData(stockTiker)
    }

    const isOverWeek = await checkOverWeek(stockTiker);

    if (isOverWeek == true) {
        await addStocksList(stockTiker)
        await addChartData(stockTiker)
    }

}

module.exports ={
    addData
}
