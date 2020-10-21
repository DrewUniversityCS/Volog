import React from "react";
import GroupCard from '../components/elements/Cards/groupCard';
import VProgressBar from '../components/elements/ProgressBar'
// import Notification from "../components/elements/Notification";
import StudentCard from "../components/elements/Cards/studentCard";
import Container from "@material-ui/core/Container";
import {Jumbotron, Row, Col} from "react-bootstrap";
import "../../pageDesignspecs/mentorPg.css";

class MentorDashboard extends React.Component {
    render() {
        return <Container>
            <Jumbotron className="jumbotron1">

                <h1>Welcome Back!</h1>
                <Row>
                    <Col>
                        <p1>
                            <Container>
                                <GroupCard/>
                            </Container>
                        </p1>
                    </Col>
                    <Col>
                        <p className="progressBarr">
                            Group cumulative progress
                            <Container>
                                <VProgressBar className="VProgressBar"/>
                            </Container>
                        </p>
                        <Col>
                            <Row>
                                <StudentCard/>
                            </Row>
                            <Row>
                                <StudentCard/>
                            </Row>
                            <Row>
                                <StudentCard/>
                            </Row>
                        </Col>
                    </Col>

                </Row>
                {/*<p>*/}
                {/*    <Notification/>*/}
                {/*</p>*/}
            </Jumbotron>
        </Container>
    }
}

export default MentorDashboard;
