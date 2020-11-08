import {Bar} from "react-chartjs-2";
import React from "react";

export const makeGoalsSummaryGraph = (obj) => {
    let labels = ["Confidence", "Empathy", "Exploration"]
    let count = [0, 0, 0]
    let item;
    let time;
    for (let i = 0; i < obj.props.items.length; i++) {
        item = obj.props.items[i];
        time = item.number_of_hours + (item.number_of_minutes / 60);
        switch (item.learning_goal) {
            case "CONFIDENCE":
                count[0] += time;
                break;
            case "EMPATHY":
                count[1] += time;
                break;
            case "EXPLORE":
                count[2] += time;
                break;
        }

    }

    let dataset = {
        label: "# of Hours",
        data: count,
        backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
        ],
        borderWidth: 2,
        borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
        ]
    }
    let options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            xAxes: [
                {
                    barPercentage: 1,
                    gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0.1)"
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0.1)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
    return <Bar data={{labels: labels, datasets: [dataset]}} options={options}/>
}