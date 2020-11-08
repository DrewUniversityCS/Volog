import React, {Component} from 'react';
import LineChart from "./LineChart";
import {Container, Jumbotron} from "react-bootstrap";

class Stats extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() {
        // this.getchartData(); // this should be this.getChartData();
        this.getChartData();
    }

    getChartData() {
        // Ajax calls here
        this.setState({
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
                datasets: [
                    {
                        label: 'Reported Hours',
                        data: [
                            100,
                            16,
                            87,
                            63,
                            15,
                            17,
                            57,
                            83,
                            152,
                            36,
                            87,
                            69,
                        ],
                        backgroundColor: 'rgba(114, 190, 114, 0.6)',
                        // 'rgba(75, 192, 192, 0.6)',
                        // 'rgba(153, 102, 255, 0.6)',
                        // 'rgba(255, 159, 64, 0.6)',
                        // 'rgba(255, 99, 132, 0.6)'
                    }
                ]
            }
        });
    }

    render() {
        return (
            <Container fluid="sm">
                <Jumbotron>
                    <LineChart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
                </Jumbotron>
            </Container>
        );
    }
}

export default Stats;