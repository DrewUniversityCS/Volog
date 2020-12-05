import React from 'react';
import {Modal} from "react-bootstrap";
import {postHour} from "../../functions/services/api/student_requests/postHour";
import "../../static/css/components/report-hours.css";
import {MDBAlert, MDBBadge, MDBBtn, MDBCardHeader, MDBContainer, MDBIcon, MDBListGroup} from "mdbreact";
import {getNotifications} from '../../functions/services/api/student_requests/fetchNotifications'
import {deleteNotification} from '../../functions/services/api/student_requests/deleteNotification'

class StudentNotifications extends React.Component {
    default_state = {
        show: false,
        notifications: []
    }
    state = this.default_state


    handleClose = () => {
        this.setState({show:false});
    }
    handleShow = () => {
        getNotifications(this);
        this.setState({show: true});
    };
    handleSubmit = () => {
        postHour(this);
        this.handleClose();
    };

    render() {

        let notificationsList;

        notificationsList = <MDBContainer>
             {
                this.state.notifications.length? this.state.notifications.map(notification=>{
                    return <MDBAlert className="m-3 text-center" color="primary" dismiss={true} onClose={()=>{deleteNotification(this, notification.id)}} >
                    {notification.title}
                </MDBAlert>
                }):<MDBAlert className="m-3 text-center" color="primary" >
                You Do Not Have Any New Notifications
            </MDBAlert>}
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