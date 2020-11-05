import {ProgressBar, Container} from "react-bootstrap";
import React, {Component} from 'react';

class VProgressBar extends Component {
    render() {
        return <Container>
            <ProgressBar>
                <ProgressBar variant="success" now={this.props.completeCount} key={1}/>
                <ProgressBar striped variant="warning" now={this.props.pendingCount} key={2}/>
            </ProgressBar>
        </Container>
    }
}

export default VProgressBar;