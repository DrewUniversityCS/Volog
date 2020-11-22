import {Bar} from "react-chartjs-2";
import React from "react";

export const makeCategorySummaryGraph = (obj) => {

    let dataCount = obj.props.activity_categories.map(el => {
        return {title: el.title, count: 0}
    });

    let item;
    let time;

    for (let i = 0; i < obj.props.items.length; i++) {
        item = obj.props.items[i];
        time = item.number_of_hours + (item.number_of_minutes / 60);

        let activity_index = item.activity_category;
        let activity_category;

        if (obj.props.activity_categories[activity_index] !== undefined) {
            activity_category = obj.props.activity_categories[activity_index].title;
        } else {
            activity_category = "undefined";
        }
        dataCount.filter(obj => {
            return obj.title === activity_category
        })[0].count += time;
    }

    let nonZeroCount = dataCount.filter(obj => {
        return obj.count !== 0
    });
    let labels = nonZeroCount.map(el => el.title);
    let count = nonZeroCount.map(el => el.count);

    let dataset = {
        label: "# of Hours",
        data: count,
        backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)",
            "rgb(191,255,101,0.4)",
            "rgb(191,40,99, 0.4)",
            "rgb(79,176,33, 0.4)",
            "rgb(88,109,165, 0.4)",
            "rgb(141,97,21, 0.4)",
            "rgb(77,165,23, 0.4)",
            "rgb(191,71,195, 0.4)",
            "rgb(80,13,109, 0.4)",
        ],
        borderWidth: 2,
        borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)",
            "rgb(191,255,101, 1)",
            "rgb(191,40,99, 1)",
            "rgb(79,176,33, 1)",
            "rgb(88,109,165, 1)",
            "rgb(141,97,21, 1)",
            "rgb(77,165,23, 1)",
            "rgb(191,71,195, 1)",
            "rgb(80,13,109, 1)",
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
    return <Bar data={{labels: labels, datasets: [dataset]}} options={options}/>;
}