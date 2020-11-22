import React, {Component} from 'react';
import LineChart from "./LineChart";
import {Container, Jumbotron} from "react-bootstrap";
	import {getHoursStats} from "../../../../functions/services/api/hours_request/stats";

class Stats extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentDidMount() {
        // this.getchartData(); // this should be this.getChartData();
        this.getChartData();
    }
    getChartData() {
        // Ajax calls here
        getHoursStats(this);
    }

    render() {
        console.log(this.state.chartData)
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