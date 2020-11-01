import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import {Container} from "react-bootstrap";

class HoursTable extends Component {
    render() {
        let items;
        if (this.props.items && !!this.props.items.length) {
            items = this.props.items.map(item => {
                let time_logged;
                let hour_type;
                let learning_goal;
                let approval;

                time_logged = item.number_of_hours + ":" + item.number_of_minutes;

                switch (item.type_of_hour) {
                    case "REQ":
                        hour_type = "Required";
                        break;
                    case "ACT":
                        hour_type = "Active (Not Requiring Preapproval)";
                        break;
                    case "PRE":
                        hour_type = "Active (Preapproval)";
                        break;
                    case "REC":
                        hour_type = "Receptive";
                        break;
                }

                learning_goal = item.learning_goal.toLowerCase();
                learning_goal = learning_goal.charAt(0).toUpperCase() + learning_goal.slice(1);

                if (item.approved === true) {
                    approval = "Approved";
                } else {
                    approval = "Pending";
                }
                return (
                    <tr>
                        <td>{item.date_of_activity}</td>
                        <td>{time_logged}</td>
                        <td>{hour_type}</td>
                        <td>{learning_goal}</td>
                        <td>{approval}</td>
                    </tr>
                )
            })
        } else {
            items = []
        }


        return (
            <Container>
                <Table responsive triped bordered hover>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Hours Recorded</th>
                        <th>Type</th>
                        <th>Learning Goal</th>
                        <th>Approval Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items}
                    </tbody>
                </Table>
            </Container>


        )
    }
}

export default HoursTable;