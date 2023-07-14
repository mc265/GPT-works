
Highcharts.getJSON('https://raw.githubusercontent.com/mc265/wood-pulp-export/main/wood%20pulp%20export.json', function (data) {
  
  var formattedData = data.map(function (point) {
    var date = new Date(point[0]);
    return [Date.UTC(date.getFullYear(), 0, 1), point[1]];
  });

     

    // Create the chart
    Highcharts.stockChart('container', {
       
     rangeSelector: {
    //buttons: [ {
     //   type: 'year',
      //  count: 5,
       // text: '5years'
  //  },  {
      //  type: 'year',
      //  count: 10,
     //   text: '10years'
   // }, {
    //    type: 'all',
    //    text: 'All'
  //  }]
enabled:false
},

          title: {
            text: 'Export of key wood products'
        },
        subtitle: {
        text: 'Data Source: <a href="https://www.fao.org/faostat/en/#data/FO">FAOSTAT Forestry</a>.',
        align: 'left'
    },
    
    
            xAxis: {
            type: 'date ',
            title: {
            enabled: true,
            text: 'Year'
        }
       },
        yAxis: {
          title:{
            enabled:true,
            text: 'tonnes'
          }
        },
        series: [{
            name: 'pulp',
            data: formattedData,
            tooltip: {
                valueDecimals: 0,
               valueSuffix: 'tonnes'
            }
        }]
    });
});
