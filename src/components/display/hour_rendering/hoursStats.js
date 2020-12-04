import React from "react";
import {MDBContainer} from "mdbreact";
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import {makeGoalsSummaryGraph} from "../graphs/goalsSummaryGraph";
import {makeCategorySummaryGraph} from "../graphs/categorySummaryGraph";


class HoursStats extends React.Component {
    state = {
        active_graph: 'category-summary'
    }

    render() {
        let active_graph;
        if (this.state.active_graph === 'category-summary') {
            active_graph = makeCategorySummaryGraph(this);
        } else if (this.state.active_graph === 'goals-summary') {
            active_graph = makeGoalsSummaryGraph(this);
        }


        return (
            <MDBContainer>
                <Row>
                    <Col sm={3}>
                        <Tabs
                            variant="pills"
                            className="flex-column"
                            defaultActiveKey="category-summary"
                            activeKey={this.state.active_graph}
                            onSelect={(k) =>
                                this.setState({active_graph: k})
                            }>
                            <Tab
                                eventKey="category-summary"
                                title="By Categories"/>
                            <Tab
                                eventKey="goals-summary"
                                title="By Goals"/>
                        </Tabs>
                    </Col>
                    <Col>
                        {active_graph}
                    </Col>
                </Row>
            </MDBContainer>
        )
    }
}

export default HoursStats;