import React from 'react';
import {Modal} from "react-bootstrap";
import {postHour} from "../../functions/services/api/student_requests/postHour";
import "../../static/css/components/report-hours.css";
import {MDBAlert, MDBBadge, MDBBtn, MDBCardHeader, MDBContainer, MDBIcon, MDBListGroup} from "mdbreact";

class StudentNotifications extends React.Component {
    default_state = {
        show: false,
    }
    state = this.default_state


    handleClose = () => {
        this.setState(this.default_state);
    }
    handleShow = () => {
        this.setState({show: true});
    };
    handleSubmit = () => {
        postHour(this);
        this.handleClose();
    };

    render() {

        let notificationsList;

        notificationsList = <MDBContainer>
            <MDBAlert className="m-3 text-center" color="primary">
                You Do Not Have Any New Notifications
            </MDBAlert>
        </MDBContainer>


        return <div>
            <MDBBtn className="ml-3" color="primary" onClick={this.handleShow}>
                Notifications
            </MDBBtn>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.show} onHide={this.handleClose} animation={true}>
                <MDBCardHeader className="peach-gradient">
                    <div className="text-center white-text"><MDBIcon far icon="bell"/> Notifications</div>
                </MDBCardHeader>
                <MDBListGroup>
                    {notificationsList}
                </MDBListGroup>
            </Modal>
        </div>
    }
}

export default StudentNotifications;