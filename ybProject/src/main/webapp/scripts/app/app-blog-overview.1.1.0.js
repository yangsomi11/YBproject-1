/*
 |--------------------------------------------------------------------------
 | Shards Dashboards: Blog Overview Template
 |--------------------------------------------------------------------------
 */

'use strict';

(function ($) {
  $(document).ready(function () {

    // Blog overview date range init.
    $('#blog-overview-date-range').datepicker({});

    //
    // Small Stats
    //

    // Datasets
    var boSmallStatsDatasets = [
      {
        backgroundColor: 'rgba(0, 184, 216, 0.1)',
        borderColor: 'rgb(0, 184, 216)',
        data: [1, 2, 1, 3, 5, 4, 7],
      },
      {
        backgroundColor: 'rgba(23,198,113,0.1)',
        borderColor: 'rgb(23,198,113)',
        data: [1, 2, 3, 3, 3, 4, 4]
      },
      {
        backgroundColor: 'rgba(255,180,0,0.1)',
        borderColor: 'rgb(255,180,0)',
        data: [2, 3, 3, 3, 4, 3, 3]
      },
      {
        backgroundColor: 'rgba(255,65,105,0.1)',
        borderColor: 'rgb(255,65,105)',
        data: [1, 7, 1, 3, 1, 4, 8]
      },
      {
        backgroundColor: 'rgb(0,123,255,0.1)',
        borderColor: 'rgb(0,123,255)',
        data: [3, 2, 3, 2, 4, 5, 4]
      }
    ];

    // Options
    function boSmallStatsOptions(max) {
      return {
        maintainAspectRatio: true,
        responsive: true,
        // Uncomment the following line in order to disable the animations.
        // animation: false,
        legend: {
          display: false
        },
        tooltips: {
          enabled: false,
          custom: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0.3
          }
        },
        scales: {
          xAxes: [{
            gridLines: false,
            scaleLabel: false,
            ticks: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: false,
            scaleLabel: false,
            ticks: {
              display: false,
              // Avoid getting the graph line cut of at the top of the canvas.
              // Chart.js bug link: https://github.com/chartjs/Chart.js/issues/4790
              suggestedMax: max
            }
          }],
        },
      };
    }

    // Generate the small charts
    boSmallStatsDatasets.map(function (el, index) {
      var chartOptions = boSmallStatsOptions(Math.max.apply(Math, el.data) + 1);
      var ctx = document.getElementsByClassName('blog-overview-stats-small-' + (index + 1));
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6", "Label 7"],
          datasets: [{
            label: 'Today',
            fill: 'start',
            data: el.data,
            backgroundColor: el.backgroundColor,
            borderColor: el.borderColor,
            borderWidth: 1.5,
          }]
        },
        options: chartOptions
      });
    });


    //
    // Blog Overview Users
    //

    var bouCtx = document.getElementsByClassName('blog-overview-users')[0];

    // Data
    var bouData = {
      // Generate the days labels on the X axis.
      labels: Array.from(new Array(30), function (_, i) {
        return i === 0 ? 1 : i;
      }),
      datasets: [{
        label: '순금',
        fill: 'start',
        data: [46602,46386,46715,46454,46533,46734,46484,46483,46746,46637
        	,46458,46307,46791,47067,47227,47311,47467,47224,47313,47376
        	,47466,47374,47353,47787,47907,48166,48464,48356,47947,47836],
        backgroundColor: 'rgba(0, 184, 216, 0.1)',
        borderColor: 'rgba(0,184,216,1)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgb(0,184,216)',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }, {
        label: '18K',
        fill: 'start',
        data: [43602,43386,43715,43454,43533,43734,43484,43483,43746,43637
        	,43458,43307,43791,43067,43227,43311,43467,44224,44313,44376
        	,44466,44374,44353,44787,44907,45166,45464,45356,44947,44836],
        backgroundColor: 'rgba(23,198,113,0.1)',
        borderColor: 'rgba(23,198,113,1)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgba(23,198,113,1)',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }, {
		label: '14K',
		fill: 'start',
		data: [41602,41386,41715,41454,41533,41734,42484,42483,42746,42637
        	,41458,41307,41791,41067,42227,42311,41467,42224,42313,41376
        	,41466,42374,42353,41787,41907,42166,42464,42356,41947,42838],
		backgroundColor: 'rgba(255,180,0,0.1)',
		borderColor: 'rgba(255,180,0,1)',
		pointBackgroundColor: '#ffffff',
		pointHoverBackgroundColor: 'rgba(255,180,0,1)',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }, {
		label: '은',
		fill: 'start',
		data: [36820,36821,36813,36798,36795,36803,36807,35797,35786,35792
			,34799,34813,34809,34809,34820,35822,35818,35815,35809,35793
			,34799,34782,34785,34788,34785,34803,34817,33830,33822,33842],
		backgroundColor: 'rgba(255,65,105,0.1)',
		borderColor: 'rgba(255,65,105,1)',
		pointBackgroundColor: '#ffffff',
		pointHoverBackgroundColor: 'rgba(255,65,105,1)',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }, {
		label: '백금',
		fill: 'start',
		data: [33820,33821,33813,33798,33795,32803,32807,34797,34786,34792
			,33799,33813,33809,32809,32820,32822,32818,34815,35809,35793
			,35799,36782,36785,36788,36785,35803,35817,34830,34822,34849],
		backgroundColor: 'rgba(0,123,255,0.1)',
		borderColor: 'rgba(0,123,255,1)',
		pointBackgroundColor: '#ffffff',
		pointHoverBackgroundColor: 'rgba(0,123,255,1)',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }]
    };

    // Options
    var bouOptions = {
      responsive: true,
      legend: {
        position: 'top'
      },
      elements: {
        line: {
          // A higher value makes the line look skewed at this ratio.
          tension: 0.3
        },
        point: {
          radius: 0
        }
      },
      scales: {
        xAxes: [{
          gridLines: false,
          ticks: {
            callback: function (tick, index) {
              // Jump every 7 values on the X axis labels to avoid clutter.
              return index % 7 !== 0 ? '' : tick;
            }
          }
        }],
        yAxes: [{
          ticks: {
            suggestedMax: 45,
            callback: function (tick, index, ticks) {
              if (tick === 0) {
                return tick;
              }
              // Format the amounts using Ks for thousands.
              return tick > 999 ? (tick/ 1000).toFixed(1) + 'K' : tick;
            }
          }
        }]
      },
      // Uncomment the next lines in order to disable the animations.
      // animation: {
      //   duration: 0
      // },
      hover: {
        mode: 'nearest',
        intersect: false
      },
      tooltips: {
        custom: false,
        mode: 'nearest',
        intersect: false
      }
    };

    // Generate the Analytics Overview chart.
    window.BlogOverviewUsers = new Chart(bouCtx, {
      type: 'LineWithLine',
      data: bouData,
      options: bouOptions
    });

    // Hide initially the first and last analytics overview chart points.
    // They can still be triggered on hover.
    var aocMeta = BlogOverviewUsers.getDatasetMeta(0);
    aocMeta.data[0]._model.radius = 0;
    aocMeta.data[bouData.datasets[0].data.length - 1]._model.radius = 0;

    // Render the chart.
    window.BlogOverviewUsers.render();

    //
    // Users by device pie chart
    //

    // Data
    var ubdData = {
      datasets: [{
        hoverBorderColor: '#ffffff',
        data: [68.3, 24.2, 7.5],
        backgroundColor: [
          'rgba(0,123,255,0.9)',
          'rgba(0,123,255,0.5)',
          'rgba(0,123,255,0.3)'
        ]
      }],
      labels: ["Desktop", "Tablet", "Mobile"]
    };

    // Options
    var ubdOptions = {
      legend: {
        position: 'bottom',
        labels: {
          padding: 25,
          boxWidth: 20
        }
      },
      cutoutPercentage: 0,
      // Uncomment the following line in order to disable the animations.
      // animation: false,
      tooltips: {
        custom: false,
        mode: 'index',
        position: 'nearest'
      }
    };

    var ubdCtx = document.getElementsByClassName('blog-users-by-device')[0];

    // Generate the users by device chart.
    window.ubdChart = new Chart(ubdCtx, {
      type: 'pie',
      data: ubdData,
      options: ubdOptions
    });

  });
})(jQuery);
