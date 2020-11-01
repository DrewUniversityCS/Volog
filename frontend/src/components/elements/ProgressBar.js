import ProgressBar from "react-bootstrap/ProgressBar";
import React, {Component} from 'react';
import {Container} from "@material-ui/core";
import "../elements/ProgressBar.js";

class VProgressBar extends Component {
    render() {
        let completeCount = 0;
        let pendingCount = 0;
        let arrLength = this.props.hours.length;
        let hour;
        let timeSubmission;
        if (this.props.hours && !! arrLength) {
            for (let i = 0; i < arrLength; i++) {
                hour = this.props.hours[i];
                timeSubmission = hour.number_of_hours + (60 / hour.number_of_minutes)
                if(hour.approved === true){
                    completeCount = completeCount + timeSubmission;
                }else{
                    pendingCount = pendingCount + timeSubmission;
                }
            }
        }

        return <Container>
            <ProgressBar>
                <ProgressBar variant="success" now={completeCount} key={1}/>
                <ProgressBar striped variant="warning" now={pendingCount} key={2}/>
            </ProgressBar>
        </Container>
    }
}

export default VProgressBar;