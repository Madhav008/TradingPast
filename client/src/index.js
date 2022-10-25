import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { createChart, CrosshairMode } from "lightweight-charts";
import axios from 'axios'
import "./index.css";
import { Options } from "./components/Options";




function App() {


  const init = useCallback(() => {
    var chart = createChart(document.getElementById("chart1"), {
      width: 1200,
      height: 740,
      crosshair: {
        mode: CrosshairMode.Normal
      },
      timeScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
        timeVisible: true,
        secondsVisible: false,
      },
      priceScale: {
        scaleMargins: {
          top: 0.3,
          bottom: 0.25
        },
        borderVisible: false
      },
      layout: {
        backgroundColor: "#131722",
        textColor: "#d1d4dc"
      },
      grid: {
        vertLines: {
          color: "rgba(42, 46, 57, 0)"
        },
        horzLines: {
          color: "rgba(42, 46, 57, 0.6)"
        }
      }
    });

    axios.get('http://localhost:3001/groww/s=2022-10-22/e=2022-10-26/i=1/s=BANKNIFTY', {
      headers: { "Access-Control-Allow-Origin": "*" }
    })
      .then((response) => {

        var candleSeries = chart.addCandlestickSeries();
        var candledata = [];

        response.data.forEach(function (val, i) {
          var timeStamp = val.time;
          console.log(timeStamp);
          let chart2 = { 'time': timeStamp, 'open': val.open, 'high': val.high, 'low': val.low, 'close': val.close };
          candledata.push(chart2);
        });
        candleSeries.setData(candledata);
      }).catch((e) => {
        alert(e);
      });

  }, []);

  useEffect(() => {
    init();
  }, );

  return (
    <div className="App flex">
      <div id="chart1" />
      <div>
        <Options />
        <Options />
        <Options />
      </div>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
