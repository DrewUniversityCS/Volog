import React, {Component} from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBDataTable,
    MDBIcon,
    MDBPopover,
    MDBPopoverBody,
    MDBPopoverHeader
} from 'mdbreact';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

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
                        hour_type = "Active";
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
                switch (learning_goal) {
                    case "Confidence":
                        learning_goal = <p className="text-danger"> {learning_goal} </p>
                        break;
                    case "Empathy":
                        learning_goal = <p className="text-default"> {learning_goal} </p>
                        break;
                    case "Explore":
                        learning_goal = <p className="text-primary"> {learning_goal} </p>
                        break;
                }

                let approval_status;
                if (item.approved === true) {
                    approval = <CheckCircleIcon className="text-success" style={{align: "center"}}/>;
                    approval_status = "Approved by your mentor."
                } else {
                    approval = <CancelIcon style={{align: "center"}}/>;
                    approval_status = "Awaiting approval by your mentor."
                }


                let description_popup;

                let activity_index = item.activity_category;
                let activity_category;
                if(this.props.activity_categories[activity_index] !== undefined){
                    activity_category = this.props.activity_categories[activity_index].title;
                }else{
                    activity_category = "undefined";
                }



                description_popup = <MDBPopover
                    placement="left"
                    popover
                    clickable
                    id="popper4"
                >
                    <MDBBtn color="primary">View</MDBBtn>
                    <div>
                        <MDBPopoverHeader>Submission Details</MDBPopoverHeader>
                        <MDBPopoverBody>
                            Approval Status:
                            <p>
                                {approval_status}
                            </p>
                            Category:
                            <p>
                                {activity_category}
                            </p>
                            Activity Description:
                            <p>
                                {item.activity_description}
                            </p>
                            Hour Type:
                            <p>
                                {hour_type}
                            </p>
                        </MDBPopoverBody>
                    </div>
                </MDBPopover>

                return (
                    {
                        date_of_activity: item.date_of_activity,
                        time_logged: time_logged,
                        learning_goal: learning_goal,
                        description: description_popup,
                        approval: approval,
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
                label: 'Learning Goal',
                field: 'learning_goal',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Approved?',
                field: 'approval',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Details',
                field: 'description',
                sort: 'disabled',
                width: 150
            }
        ]
        data.rows = items

        return (
            <MDBCard>
                <MDBCardHeader className="blue-gradient">
                    <div className="text-center white-text"><MDBIcon far icon="calendar-check"/> Your Hours</div>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBDataTable
                        entriesOptions={[5, 10, 25]}
                        entries={5}
                        materialSearch
                        scrollY
                        maxHeight="400px"
                        striped
                        data={data}
                    />
                </MDBCardBody>
            </MDBCard>

        )
    }
}

export default HoursTable;