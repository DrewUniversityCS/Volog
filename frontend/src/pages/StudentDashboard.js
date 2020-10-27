import React from "react";
import VProgressBar from '../components/elements/ProgressBar'
import Container from 'react-bootstrap/Container';
import UserPic from "../components/elements/Cards/userPic";
import "../static/css/pages/studentPg.css"
import HoursTable from "../components/display/HoursTable";
import {Button, Col, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import {getUserDataForStudent} from "../functions/services/api/student_requests/getUserDataForStudent";
import {getHoursForStudent} from "../functions/services/api/student_requests/getHoursForStudent";
import ReportHours from "../components/input/ReportHours";

class StudentDashboard extends React.Component {

    state = {
        userData: {},
        hours: [],
        complete: 0,
        pending: 0,
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
                        <UserPic>

                        </UserPic>
                    </Col>
                    <Col>
                        Welcome
                        Back, {this.state.userData.first_name} {this.state.userData.last_name} - {this.state.userData.student_id}!
                    </Col>
                </Row>
                <Container className="progress-bar">
                    <VProgressBar>

                    </VProgressBar>
                </Container>
                <Row>
                    <Col align="center">
                        <ReportHours/>
                    </Col>
                    <Col align="center">
                        <Button variant="secondary">View Pending</Button>
                    </Col>
                    <Col align="center">
                        <Button variant="secondary">Notifications</Button>
                    </Col>
                </Row>
            </Paper>
            <Row>
                <HoursTable items={this.state.hours} updateState={this.updateState}>

                </HoursTable>
            </Row>
        </Container>
    }

}


export default StudentDashboard;