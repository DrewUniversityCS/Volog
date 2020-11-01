import ProgressBar from "react-bootstrap/ProgressBar";
import React, {Component} from 'react';
import {Container} from "@material-ui/core";
import "../elements/ProgressBar.js";

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