import React from "react";
import {MDBContainer} from "mdbreact";
import {Col, Row, Tab, Tabs} from "react-bootstrap";

class HoursStats extends React.Component {
    state = {
        active_graph: 'category-summary'
    }

    render() {
        let active_graph;
        if (this.state.active_graph === 'category-summary') {
            active_graph = <div>CATEGORIES</div>
        } else {
            active_graph = <div>Whoa there</div>
        }


        return (
            <MDBContainer>
                <Row>
                    <Col sm={3}>
                        <Tabs variant="pills"
                              className="flex-column"
                              defaultActiveKey="category-summary"
                              activeKey={this.state.active_graph}
                              onSelect={(k) => this.setState({active_graph: k})}>
                            <Tab eventKey="category-summary" title="By Categories"/>
                            <Tab eventKey="time-series" title="Over Time"/>
                        </Tabs>
                    </Col>
                    <Col sm={3}>
                        {active_graph}
                    </Col>
                </Row>
            </MDBContainer>
        )
    }
}

export default HoursStats;