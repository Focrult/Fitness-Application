let myChart = document.getElementById('myChart').getContext('2d');

let chart = new Chart(myChart, {
    //All the properties and data here
    type: 'line', //bar horizontal, pie, line, donut, radar and polarArea
    data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
        datasets: [{
        label: 'Activity',
        data:[
            12,
            22,
            10,
            9,
            10,
            20,
            24,
            19,
        ]
    }],
    },
    options: {},
});




//time on the bottom ie days/weeks
//amount of exercises on the left side? 