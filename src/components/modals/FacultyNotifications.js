import React from 'react';
import {Modal} from "react-bootstrap";
import {postHour} from "../../functions/services/api/student_requests/postHour";
import "../../static/css/components/report-hours.css";
import {MDBAlert, MDBBadge, MDBBtn, MDBCardHeader, MDBContainer, MDBIcon, MDBListGroup} from "mdbreact";
import {getAnnouncements} from '../../functions/services/api/faculty_requests/fetchRecentAnnouncements'
import {deleteAnnouncement} from '../../functions/services/api/faculty_requests/deleteAnnouncement'
import Notifications from "@material-ui/icons/Notifications";

class FacultyNotification extends React.Component {
    default_state = {
        show: false,
        notifications: []
    }
    state = this.default_state


    handleClose = () => {
        this.setState({show:false});
    }
    handleShow = () => {
        getAnnouncements(this);
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
                    return <MDBAlert className="m-3 text-center" color="primary" dismiss={true} onClose={()=>{deleteAnnouncement(this, notification.id)}} >
                    {notification.title}
                </MDBAlert>
                }):<MDBAlert className="m-3 text-center" color="primary" >
                You Do Not Have Any New Notifications 
                </MDBAlert>
            }
            
        </MDBContainer>


        return <div>
           <a onClick={this.handleShow}> 
                            <button
                                className="bg-green-700 font-bold hover:bg-green-800 hover:shadow-lg inline-flex items-center px-3 py-3 h-12 right-0 rounded text-sm text-white text-center" title={'Make an announcement'}>
                                   <Notifications />
                            </button>
                        </a>
            
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

export default FacultyNotification;