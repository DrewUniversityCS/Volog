import React, {Component} from 'react';
import {MDBCard, MDBCardBody, MDBCardHeader, MDBDataTable} from 'mdbreact';

class HoursTable extends Component {
    render() {
        let items;
        let index = 0;
        if (this.props.items && !!this.props.items.length) {
            items = this.props.items.map(item => {
                let time_logged;
                let hour_type;
                let learning_goal;
                let approval;

                time_logged = item.number_of_hours + ":" + item.number_of_minutes;
                if (item.number_of_minutes === 0) { // we add an extra 0 so it doesn't look like 3:0 and is instead 3:00
                    time_logged = time_logged + "0";
                }
                index++;
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
                    approval = "Yes";
                } else {
                    approval = "No";
                }
                return (
                    {
                        date_of_activity: item.date_of_activity,
                        time_logged: time_logged,
                        hour_type: hour_type,
                        learning_goal: learning_goal,
                        approval: approval
                    }
                )
            })
        } else {
            items = []
        }

        let data = {};
        data.columns = [
            {
                label: 'Date of Activity',
                field: 'date_of_activity',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Time Logged',
                field: 'time_logged',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Type',
                field: 'hour_type',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Learning Goal',
                field: 'learning_goal',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Approved',
                field: 'approval',
                sort: 'asc',
                width: 150
            },
        ]
        data.rows = items

        return (
            <MDBCard>
                <MDBCardHeader className="blue-gradient">
                    <div className="text-center white-text">Your Hours</div>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBDataTable
                        entriesOptions={[5, 10, 25]}
                        entries={5}
                        materialSearch
                        scrollY
                        maxHeight="200px"
                        striped
                        bordered
                        data={data}
                    />
                </MDBCardBody>
            </MDBCard>

        )
    }
}

export default HoursTable;