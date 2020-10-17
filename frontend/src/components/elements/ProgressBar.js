import ProgressBar from "react-bootstrap/ProgressBar";
import React,{Component} from 'react';
import {Container} from "@material-ui/core";

class VProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CompletedHours: 2,
            PendingHours: 5,
            RequiredHours: 10
        }

    }

    render() {
        return<Container>
            <ProgressBar>
              <ProgressBar striped variant="success" now={this.state.CompletedHours} key={1} />
              <ProgressBar variant="warning" now={this.state.PendingHours} key={2} />
              <ProgressBar striped variant="danger" now={this.state.RequiredHours} key={3} />
            </ProgressBar>
        </Container>
    }
}
export default VProgressBar;