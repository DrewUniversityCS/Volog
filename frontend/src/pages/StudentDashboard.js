import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import VProgressBar from '../components/elements/ProgressBar'
import Container from 'react-bootstrap/Container';
import UserPic from "../components/elements/Cards/userPic";
import "../../pageDesignspecs/studentPg.css"
import ReportHours from "../components/input/ReportHours";
import HoursTable from "../components/display/HoursTable";
import {Col, Row} from "react-bootstrap";
import Notification from "../components/elements/Notification";

// import Notification from "../components/elements/Notification";


class StudentDashboard extends React.Component {

    render() {

        return <Container>
            <Jumbotron className="jumbotron2">
                <h1>Welcome Back!</h1>
                <p>
                    Your progress
                    <Container>
                        <VProgressBar/>
                    </Container>
                </p>
                <Row>
                    <Col md={{span: 3}}>
                        <Row>
                            <UserPic/>
                        </Row>
                        <Row md={{offset: 1}}>
                            <Notification/>
                        </Row>
                    </Col>
                    <Col md={{span: 8}}>
                        <HoursTable/>
                        <ReportHours/>
                    </Col>
                </Row>


            </Jumbotron>


        </Container>
    }

}


export default StudentDashboard;