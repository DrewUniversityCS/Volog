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
                <Container className="progress-bar">
                    <VProgressBar completeCount={this.state.approved_hours} pendingCount={this.state.pending_hours}>

                    </VProgressBar>
                </Container>
                <Row>
                    <Col align="center">
                        <ReportHours handleChange={() => {
                            getHoursForStudent(this)
                        }}/>
                    </Col>
                    <Col align="center">
                        <Button variant="secondary">Notifications</Button>
                    </Col>
                </Row>
            </Paper>
            <Col>
                <Container className="hours-table">
                    <HoursTable items={this.state.hours}/>
                </Container>
            </Col>

        </Container>
    }

}


export default StudentDashboard;