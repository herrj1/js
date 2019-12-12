    $(function(){
      $.ajax({
        url: 'http://localhost/chart_data.php',
        type: 'GET',
        success : function(data) {
          chartData = data;
          var chartProperties = {
            "caption": "Top 10 best football players in2015",
            "xAxisName": "Player",
            "yAxisName": "Wicket Taken",
            "rotatevalues": "1",
            "theme": "zune"
          };
          apiChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container',
            width: '550',
            height: '350',
            dataFormat: 'json',
            dataSource: {
              "chart": chartProperties,
              "data": chartData
            }
          });
          apiChart.render();
        }
      });
    });
