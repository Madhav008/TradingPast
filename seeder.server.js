const createClient = require('@supabase/supabase-js').createClient
const StockSocket = require("stocksocket");
const supabaseUrl = 'http://localhost:8181'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE'
// const supabaseUrl = 'http://192.168.1.124:8181'
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE"
const supabase = createClient(supabaseUrl, supabaseKey)


var stock='';

function setTiker(tick) {
    StockSocket.addTicker(tick, stockPriceChanged);
}



var price = parseFloat(0).toFixed(8);
var open = parseFloat(0).toFixed(8);
var low = parseFloat(0).toFixed(8);
var high = parseFloat(0).toFixed(8);
var close = parseFloat(0).toFixed(8);
var timestamp;


var data = {};
function stockPriceChanged(data) {
    //Choose what to do with your data as it comes in.
    price = data.price;
    stock = data.id;
    console.log(data.price);
}

function onesecdataprep() {

    const now = Date.now(); // Unix timestamp in milliseconds
    timestamp = now;

    if (open == parseFloat(0).toFixed(8)) {
        open = price;
    }

    high = Math.max(high, price);
    if (low === 0) {
        low = price
    } else {
        low = Math.min(low, price);
    }

    close = price;

    data = { open: open, low: low, high: high, close: close, timestamp: timestamp }

}

async function storedata() {
    var tempdata = data;
    if (open != parseFloat(0).toFixed(8) && low != parseFloat(0).toFixed(8) && high != parseFloat(0).toFixed(8) && close != parseFloat(0).toFixed(8) && timestamp != parseFloat(0).toFixed(8)) {
        console.log(JSON.stringify(tempdata));
        // Insert The Quetes data into the database

        supabase.from('stocks_price').insert([{ timestamp: tempdata.timestamp, open: tempdata.open, low: tempdata.low, close: tempdata.close, high: tempdata.high,stock_name:stock }]).then((stock,err)=>{
            console.log(stock);
        })
        
        // supabase
        //     .from('quotes')
        //     .insert([
        //         { timestamp: tempdata.timestamp, open: tempdata.open, low: tempdata.low, close: tempdata.close, high: tempdata.high },
        //     ]).then(async (quotes, err) => {
        //         if (err) {
        //             console.log("error-----------------------------------");
        //             return console.log(err);
        //         }
        //         console.log("quotes --------------------------------------");
        //         console.log(quotes);

        //         console.log(tempdata.timestamp);
        //         // Find the id where that timestamp exists

        //         supabase
        //             .from('quotes')
        //             .select("id")
        //             .eq('timestamp', tempdata.timestamp).then((quotes_id, error) => {
        //                 if (error) {
        //                     console.log("error-----------------------------------");
        //                     return console.log(error);
        //                 }

        //                 console.log(quotes_id.data[0].id);
        //                 // Insert into the other table using that id as refrence key

        //                 supabase
        //                     .from('Data')
        //                     .insert([{ timestamp: data.timestamp, quotes: quotes_id.data[0].id, stock: stock }]).then((stock, error) => {
        //                         if (error) {
        //                             console.log("error-----------------------------------");
        //                             return console.log(error);
        //                         }
        //                         console.log("stock --------------------------------------");
        //                         console.log(stock);
        //                         console.log(tempdata.timestamp);

        //                     })
        //             })
        //     });


        /* const { quotes, err } = await supabase
            .from('quotes')
            .insert([
                { id: data.timestamp, open: data.open, low: data.low, close: data.close, high: data.high },
            ])
        console.log(quotes);
        if (quotes.status == 201) {
            const { stocks, error } = await supabase
                .from('Data')
                .insert([
                    { timestamp: data.timestamp, quotes: data.timestamp },
                ])
        }*/

        price = parseFloat(0).toFixed(8);
        open = parseFloat(0).toFixed(8);
        low = parseFloat(0).toFixed(8);
        high = parseFloat(0).toFixed(8);
        close = parseFloat(0).toFixed(8);
    }


}



setInterval(onesecdataprep, 200);
setInterval(storedata, 1000);


module.exports = {
    setTiker, supabase
};