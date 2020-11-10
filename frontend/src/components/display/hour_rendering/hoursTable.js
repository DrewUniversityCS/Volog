import {MDBBtn, MDBDataTable, MDBPopover, MDBPopoverBody, MDBPopoverHeader} from "mdbreact";
import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ListAltRounded from "@material-ui/icons/ListAltRounded";
import CancelIcon from "@material-ui/icons/Cancel";
import Redo from "@material-ui/icons/RedoOutlined";
import Delete from "@material-ui/icons/DeleteForeverOutlined";
import {Modal} from "react-bootstrap";
import {deleteHour, updateHourStatus} from "../../../functions/services/api/hours_request/update_hour";

class HoursTable extends React.Component {

    state = {
        reRequestShow: false,
        deleteShow: false,
        targetHourId: null,
        targetDelHourId: null
    };

    handleReRequest = () => {
        updateHourStatus(this, this.state.targetHourId, {
            approval_status: "PENDING",
            mentor_comment: this.state.mentor_comment
        })
    };
    handleDelete = () => {
        deleteHour(this, this.state.targetDelHourId)
    };

    ReRequestModalOpen = (val, targetHourId) => {
        this.setState({
            reRequestShow: val, targetHourId
        })
    };
    deleteModalOpen = (val, targetDelHourId) => {
        this.setState({
            deleteShow: val, targetDelHourId
        })
    };


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
                console.log(item.approval_status);
                if (item.approval_status === 'APPROVED') {
                    approval = <CheckCircleIcon className="text-success" style={{align: "center"}}/>;
                    approval_status = "Approved by your mentor."
                } else if (item.approval_status === 'DECLINED') {
                    approval = <div style={{align: "center"}}><CancelIcon/> | <Redo onClick={() => {
                        this.ReRequestModalOpen(true, item.id)
                    }}/></div>;
                    approval_status = <div> {item.mentor_comment} <Delete onClick={() => {
                        this.deleteModalOpen(true, item.id)
                    }}/></div>
                } else {
                    approval = <div style={{align: "center"}}><ListAltRounded/></div>;
                    approval_status = <div>Awaiting approval by your mentor. <Delete onClick={() => {
                        this.deleteModalOpen(true, item.id)
                    }}/></div>
                }


                let description_popup;

                let activity_index = item.activity_category;
                let activity_category;
                if (this.props.activity_categories[activity_index] !== undefined) {
                    activity_category = this.props.activity_categories[activity_index].title;
                } else {
                    activity_category = "undefined";
                }


                description_popup = <MDBPopover
                    placement="left"
                    popover
                    clickable
                    id="popper4"
                >
                    <MDBBtn color="primary" outline>View</MDBBtn>
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
        const {reRequestShow, deleteShow} = this.state;

        return (
            <>
                <MDBDataTable
                    entriesOptions={[5, 10, 25]}
                    entries={5}
                    materialSearch
                    scrollY
                    maxHeight="400px"
                    striped
                    data={data}
                />
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={reRequestShow} onHide={() => {
                    this.ReRequestModalOpen(true)
                }} animation={false}>
                    <div>
                        <div className={'p-4 pd-md-0 bg-grey-800 text-xl text-center font-medium'}>Re-Request Review
                            From Mentor
                        </div>
                        <div className={'p-4 flex justify-around'}>
                            <button
                                onClick={() => {
                                    this.handleReRequest()
                                }}
                                className={'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'}
                            >Yes
                            </button>

                            <button
                                onClick={() => {
                                    this.ReRequestModalOpen(false, null)
                                }}
                                className={'bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded '}
                            >No
                            </button>
                        </div>
                    </div>

                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={deleteShow} onHide={() => {
                    this.deleteModalOpen(true)
                }} animation={false}>
                    <div>
                        <div className={'p-4 pd-md-0 bg-grey-800 text-xl text-center font-medium'}>Are You Sure?
                        </div>
                        <div className={'p-4 flex justify-around'}>
                            <button
                                onClick={() => {
                                    this.handleDelete()
                                }}
                                className={'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'}
                            >Yes
                            </button>

                            <button
                                onClick={() => {
                                    this.deleteModalOpen(false, null)
                                }}
                                className={'bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded '}
                            >No
                            </button>
                        </div>
                    </div>

                </Modal>
            </>
        )
    }
}

export default HoursTable;
