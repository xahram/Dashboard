import React from 'react'
import Charts from 'chart.js/dist/Chart'
export default class Chart extends React.Component {
    state = {
        barChart: null
    }
    componentDidMount() {
        var ctx = document.getElementById('myChart');
        var myChart = new Charts(ctx, {
            type: 'doughnut',
            data: {
                // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                    ],
                }],
                labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                ],
                // datasets: [{
                //     label: '# of Votes',
                //     data: [12, 19, 3],
                //     backgroundColor: [
                //         'rgba(255, 99, 132, 0.2)',
                //         'rgba(54, 162, 235, 0.2)',
                //         'rgba(255, 206, 86, 0.2)',
                //         'rgba(75, 192, 192, 0.2)',
                //         'rgba(153, 102, 255, 0.2)',
                //         'rgba(255, 159, 64, 0.2)'
                //     ],
                
                    // borderColor: [
                    //     'rgba(255, 99, 132, 1)',
                    //     'rgba(54, 162, 235, 1)',
                    //     'rgba(255, 206, 86, 1)',
                    //     'rgba(75, 192, 192, 1)',
                    //     'rgba(153, 102, 255, 1)',
                    //     'rgba(255, 159, 64, 1)'
                    // ],
                //     borderWidth: 1
                // }]
            },
            // options: {
            //     scales: {
            //         yAxes: [{
            //             ticks: {
            //                 beginAtZero: true
            //             }
            //         }]
            //     }
            // }
        });
    }

    render() {
        return (<div style={{ width: "100%", height: "40%", margin: "auto" }}>
            <canvas id="myChart" ></canvas>
        </div>)
    }

}

