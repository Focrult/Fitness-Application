const chartData = JSON.parse('{{chartData}}');

let myChart = document.getElementById('myChart').getContext('2d');

let chart = new Chart(myChart, {
  type: 'bar', //bar horizontal, pie, line, donut, radar and polarArea
  data: {
    labels: chartData.labels,
    datasets: [{
      label: 'Activities Completed',
      data: chartData.datasets[0].data,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {},
});