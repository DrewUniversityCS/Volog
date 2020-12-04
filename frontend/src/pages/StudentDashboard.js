import React from "react";
import VProgressBar from '../components/display/cards/progressBar'
import Container from 'react-bootstrap/Container';
import UserPic from "../components/display/cards/userPic";
import "../static/css/pages/studentPg.css"
import HoursDataView from "../components/display/hour_rendering/HoursDataView";
import {Col, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import {getUserDataForStudent} from "../functions/services/api/student_requests/getUserDataForStudent";
import {getHoursForStudent} from "../functions/services/api/student_requests/getHoursForStudent";
import ReportHours from "../components/modals/reportHours";
import {Redirect} from "react-router-dom";
import {getActivityCategories} from "../functions/services/api/getActivityCategories";
import StudentNotifications from "../components/modals/studentNotifications";
import Badge from 'react-bootstrap/Badge'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faTrophy} from '@fortawesome/free-solid-svg-icons'


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
        activity_categories: [],
        notifications: [],
    }

    componentDidMount() {
        getUserDataForStudent(this);
        getHoursForStudent(this);
        getActivityCategories(this);
    }

    refreshHourData = () => {
        getUserDataForStudent(this);
        getHoursForStudent(this);
        getActivityCategories(this);
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
            <Paper className="student-progress-profile">
                <Row>
                    <Col>
                        <Row>
                            <Col className="user-pic" align="center">
                                <UserPic imgSrc={this.state.userData.user.profile_picture}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col align="center">
                        <Row className="welcome-text">
                            Welcome,
                            {' '}{this.state.userData.user.first_name}!
                        </Row>
                        <Row className="approved-hours">
                            You have {Math.round(this.state.approved_hours * 100) / 100} approved hours.
                        </Row>
                        <Row className="pending-hours">
                            You have {Math.round(this.state.pending_hours * 100) / 100} pending hours.
                        </Row>
                        <Row>
                            <ReportHours onChange={() => getHoursForStudent(this)}
                                         activity_categories={this.state.activity_categories}
                                         method='create'
                            />
                            <StudentNotifications/>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Container className="progress-container">
                        <VProgressBar completeCount={this.state.approved_hours}
                                      pendingCount={this.state.pending_hours}
                                      className="progress-bar"/>

                        <Badge variant="dark">Congrats!
                            {/*<FontAwesomeIcon icon={faTrophy} />*/}
                            {/*<FontAwesomeIcon icon="trophy" />*/}
                        </Badge>

                    </Container>
                </Row>


            </Paper>

            <div className={'pb-20'}>
                <Col>
                    <div style={{height: "20px"}}/>
                    <HoursDataView items={this.state.hours} activity_categories={this.state.activity_categories}
                                   refreshHourData={this.refreshHourData}/> </Col>
            </div>

        </Container>
    }

}


export default StudentDashboard;