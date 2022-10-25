function dateToChartTimeMinute(date) {
	return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), 0, 0) / 1000;
};

var chart = LightweightCharts.createChart(document.getElementById('chart'), {
	width: 600,
  height: 300,
	layout: {
		backgroundColor: '#ffffff',
		textColor: 'rgba(33, 56, 77, 1)',
	},
  localization: {
        locale: 'cn-CN',
    },
	grid: {
		vertLines: {
			color: 'rgba(197, 203, 206, 0.7)',
		},
		horzLines: {
			color: 'rgba(197, 203, 206, 0.7)',
		},
	},
	timeScale: {
		timeVisible: true,
    secondsVisible: false,
	},
});

var lineSeries = chart.addCandlestickSeries();

var data =[
		{time: 1575216000, open: 7307.38, high: 7313.76, low: 7293.05, close: 7296.62},
	 {time: 1575216060, open: 7296.62, high: 7297.48, low: 7296.47, close: 7297.48},
	 {time: 1575216120, open: 7297.48, high: 7297.48, low: 7283.13, close: 7290.23},
	 {time: 1575216180, open: 7290.23, high: 7298.84, low: 7284.95, close: 7298.84},
	 {time: 1575216240, open: 7298.84, high: 7327.73, low: 7298.84, close: 7324.57},
	 {time: 1575216300, open: 7324.57, high: 7343.94, low: 7319.16, close: 7330.34},
	 {time: 1575216360, open: 7330.34, high: 7330.34, low: 7317.08, close: 7322.8},
	 {time: 1575216420, open: 7322.8, high: 7324.56, low: 7315.29, close: 7324.56},
	 {time: 1575216480, open: 7324.56, high: 7324.56, low: 7313.67, close: 7315.28},
	 {time: 1575216540, open: 7315.28, high: 7329.57, low: 7314.45, close: 7329.07},
   {time: 1575216600, open: 7329.07, high: 7329.07, low: 7322.43, close: 7322.59},
   {time: 1575216660, open: 7322.59, high: 7344.4, low: 7322.59, close: 7344.4},
   {time: 1575216720, open: 7344.4, high: 7344.4, low: 7326.15, close: 7329.85},
   {time: 1575216780, open: 7329.85, high: 7329.85, low: 7324.37, close: 7327.74},
   {time: 1575216840, open: 7327.74, high: 7327.74, low: 7319.81, close: 7325.48},
	 {time: 1575216900, open: 7325.48, high: 7329.88, low: 7323.41, close: 7329.88},
	 {time: 1575216960, open: 7329.88, high: 7329.88, low: 7325.67, close: 7326.03},
	 {time: 1575217020, open: 7326.03, high: 7326.13, low: 7324.13, close: 7324.13},
	 {time: 1575217080, open: 7324.13, high: 7328.35, low: 7320.17, close: 7328.35},
	 {time: 1575217140, open: 7328.35, high: 7334.92, low: 7325.09, close: 7334.92},
	 {time: 1575217200, open: 7334.92, high: 7341.93, low: 7333.06, close: 7341.93},
	 {time: 1575217260, open: 7341.93, high: 7341.93, low: 7336.17, close: 7336.17},
	 {time: 1575217320, open: 7336.17, high: 7338.98, low: 7334.06, close: 7336.99},
	 {time: 1575217380, open: 7336.99, high: 7336.99, low: 7328.25, close: 7328.25},
	 {time: 1575217440, open: 7328.25, high: 7328.3, low: 7327.63, close: 7327.63},
	 {time: 1575217500, open: 7327.63, high: 7329.72, low: 7324.78, close: 7324.78},
	 {time: 1575217560, open: 7324.78, high: 7330.4, low: 7322.44, close: 7329.24},
	 {time: 1575217620, open: 7329.24, high: 7329.24, low: 7321.94, close: 7327.23},
	 {time: 1575217680, open: 7327.23, high: 7327.46, low: 7327.23, close: 7327.46},
	 {time: 1575217740, open: 7327.46, high: 7327.46, low: 7313.9, close: 7327.3},
	 {time: 1575217800, open: 7327.3, high: 7327.3, low: 7313.67, close: 7313.67},
	 {time: 1575217860, open: 7313.67, high: 7322.73, low: 7313, close: 7314.51},
	 {time: 1575217920, open: 7314.51, high: 7314.51, low: 7313, close: 7313},
	 {time: 1575217980, open: 7313, high: 7313, low: 7299.02, close: 7300.51},
	 {time: 1575218040, open: 7300.51, high: 7313, low: 7300.51, close: 7313},
	 {time: 1575218100, open: 7313, high: 7313, low: 7305.24, close: 7305.24},
	 {time: 1575218160, open: 7305.24, high: 7306.48, low: 7305.24, close: 7305.48},
	 {time: 1575218220, open: 7305.48, high: 7305.48, low: 7297.99, close: 7297.99},
	 {time: 1575218280, open: 7297.99, high: 7305.48, low: 7295.77, close: 7305.48},
	 {time: 1575218340, open: 7305.48, high: 7319.84, low: 7298.87, close: 7314.43},
	 {time: 1575218400, open: 7314.43, high: 7320.53, low: 7314.43, close: 7315.12},
	 {time: 1575218460, open: 7315.12, high: 7315.12, low: 7304.88, close: 7314.39},
	 {time: 1575218520, open: 7314.39, high: 7322, low: 7313.65, close: 7322},
	 {time: 1575218580, open: 7322, high: 7322, low: 7316.33, close: 7316.43},
	 {time: 1575218640, open: 7316.43, high: 7316.43, low: 7313.86, close: 7313.86},
	 {time: 1575218700, open: 7313.86, high: 7315.22, low: 7313.86, close: 7315.22},
	 {time: 1575218760, open: 7315.22, high: 7333.14, low: 7315.22, close: 7329.35},
	 {time: 1575218820, open: 7329.35, high: 7329.87, low: 7321.47, close: 7321.47},
	 {time: 1575218880, open: 7321.47, high: 7322.04, low: 7321.47, close: 7322.04},
	 {time: 1575218940, open: 7322.04, high: 7332.78, low: 7322.04, close: 7322.81},
	 {time: 1575219000, open: 7322.81, high: 7339.02, low: 7322.47, close: 7322.47},
	 {time: 1575219060, open: 7322.47, high: 7328.29, low: 7322.47, close: 7328.29},
	 {time: 1575219120, open: 7328.29, high: 7331.55, low: 7318.49, close: 7331.55},
	 {time: 1575219180, open: 7331.55, high: 7331.55, low: 7318.5, close: 7327.66},
	 {time: 1575219240, open: 7327.66, high: 7327.66, low: 7319.9, close: 7326.47},
	 {time: 1575219300, open: 7326.47, high: 7326.47, low: 7315.22, close: 7315.22},
	 {time: 1575219360, open: 7315.22, high: 7323.59, low: 7315.22, close: 7323.36},
	 {time: 1575219420, open: 7323.36, high: 7323.36, low: 7314.64, close: 7317.49},
	 {time: 1575219480, open: 7317.49, high: 7325.71, low: 7317.49, close: 7325.71},
	 {time: 1575219540, open: 7325.71, high: 7330.99, low: 7317.14, close: 7330.99},
	 {time: 1575219600, open: 7330.99, high: 7334.75, low: 7323.68, close: 7334.75},
   {time: 1575219660, open: 7334.75, high: 7334.75, low: 7326.6, close: 7328.21},
   {time: 1575219720, open: 7328.21, high: 7328.21, low: 7314.88, close: 7317.87},
   {time: 1575219780, open: 7317.87, high: 7324.25, low: 7309.96, close: 7320.54},
   {time: 1575219840, open: 7320.54, high: 7320.54, low: 7317.74, close: 7317.74},
   {time: 1575219900, open: 7317.74, high: 7320.99, low: 7309.54, close: 7316.45},
   {time: 1575219960, open: 7316.45, high: 7316.45, low: 7303.02, close: 7311.95},
   {time: 1575220020, open: 7311.95, high: 7311.95, low: 7295.82, close: 7308.87},
   {time: 1575220080, open: 7308.87, high: 7308.87, low: 7292, close: 7298.81},
   {time: 1575220140, open: 7298.81, high: 7301.47, low: 7290.33, close: 7290.33},
   {time: 1575220200, open: 7290.33, high: 7295.79, low: 7285.87, close: 7295.79},
   {time: 1575220260, open: 7295.79, high: 7301.34, low: 7295.79, close: 7301.34},
   {time: 1575220320, open: 7301.34, high: 7313.27, low: 7296.64, close: 7313.27},
   {time: 1575220380, open: 7313.27, high: 7321, low: 7303.88, close: 7318.98},
   {time: 1575220440, open: 7318.98, high: 7318.98, low: 7302.87, close: 7307.79},
   {time: 1575220500, open: 7307.79, high: 7307.79, low: 7307.79, close: 7307.79},
   {time: 1575220560, open: 7307.79, high: 7310, low: 7304.14, close: 7308.69},
   {time: 1575220620, open: 7308.69, high: 7308.69, low: 7304.59, close: 7304.59},
   {time: 1575220680, open: 7304.59, high: 7319.63, low: 7304.59, close: 7311.55}, 
   {time: 1575220740, open: 7311.55, high: 7316.71, low: 7309.09, close: 7309.09},
   {time: 1575220800, open: 7309.09, high: 7320.09, low: 7308.89, close: 7311.17},
   {time: 1575220860, open: 7311.17, high: 7311.9, low: 7303.86, close: 7303.86},
   {time: 1575220920, open: 7303.86, high: 7315.93, low: 7303.84, close: 7303.84},
   {time: 1575220980, open: 7303.84, high: 7312.28, low: 7302.04, close: 7312.12},
   {time: 1575221040, open: 7312.12, high: 7312.58, low: 7298.65, close: 7311.45},
   {time: 1575221100, open: 7311.45, high: 7311.45, low: 7304.94, close: 7304.95},
   {time: 1575221160, open: 7304.95, high: 7317.31, low: 7304.95, close: 7317.31},
   {time: 1575221220, open: 7317.31, high: 7317.31, low: 7301.81, close: 7307.02},
   {time: 1575221280, open: 7307.02, high: 7319.2, low: 7307.02, close: 7319.2},
   {time: 1575221340, open: 7319.2, high: 7320.49, low: 7314.62, close: 7318.77},
   {time: 1575221400, open: 7318.77, high: 7324.08, low: 7318.77, close: 7324.08},
   {time: 1575221460, open: 7324.08, high: 7324.08, low: 7314.63, close: 7323.34},
   {time: 1575221520, open: 7323.34, high: 7323.34, low: 7323.34, close: 7323.34},
   {time: 1575221580, open: 7323.34, high: 7333.94, low: 7318.8, close: 7333.38},
   {time: 1575221640, open: 7333.38, high: 7333.38, low: 7329.41, close: 7329.41},
   {time: 1575221700, open: 7329.41, high: 7329.41, low: 7320.49, close: 7323.21},
   {time: 1575221760, open: 7323.21, high: 7323.21, low: 7318.49, close: 7318.91},
   {time: 1575221820, open: 7318.91, high: 7322.87, low: 7318.48, close: 7318.48},
   {time: 1575221880, open: 7318.48, high: 7322.84, low: 7312.31, close: 7312.31},
   {time: 1575221940, open: 7312.31, high: 7319.24, low: 7307.35, close: 7307.35}
   ];
   var candledata=[];
  
data.forEach(function (val,i) {
  let timeStamp=dateToChartTimeMinute(new Date(val.time*1000));
  
  let chart2={
    'time' :timeStamp , 
    'open' :  val.open ,
    'high' :val.high,
    'low' :val.low,
    'close' : val.close
  };
	candledata.push(chart2);

});

lineSeries.setData(candledata);