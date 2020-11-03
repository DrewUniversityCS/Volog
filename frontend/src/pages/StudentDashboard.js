import React from "react";
import VProgressBar from '../components/elements/ProgressBar'
import Container from 'react-bootstrap/Container';
import UserPic from "../components/display/cards/userPic";
import "../static/css/pages/studentPg.css"
import HoursTable from "../components/display/HoursTable";
import {Button, Col, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import {getUserDataForStudent} from "../functions/services/api/student_requests/getUserDataForStudent";
import {getHoursForStudent} from "../functions/services/api/student_requests/getHoursForStudent";
import ReportHours from "../components/input/ReportHours";
import { Redirect } from "react-router-dom";
class StudentDashboard extends React.Component {

    state = {
        userData: {
            user: {},
            student_id: '',
            class_standing: ''
        },
        hours: [],
        approved_hours: '',
        pending_hours: '',
        notifications: [],
    }

    componentDidMount() {
        getUserDataForStudent(this);
        getHoursForStudent(this);
    }

    render() {
    //This will prevent the faculty or mentor from accessing the student page
    let role = this.props.userData.role;
        if (role === 2) {
            return <Redirect to="/app/mentor" push/>
        } else if (role === 0) {
            return <Redirect to="/app/" push/>
        }
        return <Container className="student-page">
            <Row area-label="top spacer">

            </Row>
            <Paper className="student-progress-profile">
                <Row>
                    <Col>
                        <Container className="user-pic">
                            <UserPic imgSrc={this.state.userData.user.profile_picture}/>
                        </Container>
                    </Col>
                    <Col>
                        <Row className="welcome-text">
                            Welcome
                            Back, {this.state.userData.user.first_name}!
                        </Row>
                        <Row className="approved-hours">
                            You have {Math.round(this.state.approved_hours*100)/100} approved hours.
                        </Row>
                        <Row className="pending-hours">
                            You have {Math.round(this.state.pending_hours*100)/100} pending hours.
                        </Row>
                    </Col>
                </Row>
                    <Container className="progress-container">
                        <VProgressBar completeCount={this.state.approved_hours} pendingCount={this.state.pending_hours} className="progress-bar"/>
                    </Container>

                <Row>
                    <Col align="center">
                        <ReportHours onChange={()=>getHoursForStudent(this)}/>
                    </Col>
                    <Col align="center">
                        <Button variant="primary">Notifications</Button>
                    </Col>
                </Row>
            </Paper>
            <div className={'pb-10'}>
                <Col>
                    <Container className="hours-table">
                        <HoursTable items={this.state.hours}/>
                    </Container>
                </Col>
            </div>

        </Container>
    }

}


export default StudentDashboard;