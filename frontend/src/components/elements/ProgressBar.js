import ProgressBar from "react-bootstrap/ProgressBar";
import React,{Component} from 'react';
import {Container} from "@material-ui/core";
import "../elements/ProgressBar.js";

class VProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CompletedHours: 39,
            PendingHours: 5,
        }

    }

    render() {
        return<Container>
            <ProgressBar>
              <ProgressBar variant="success" now={this.state.CompletedHours} key={1} />
              <ProgressBar striped variant="warning" now={this.state.PendingHours} key={2} />
            </ProgressBar>
        </Container>
    }
}
export default VProgressBar;