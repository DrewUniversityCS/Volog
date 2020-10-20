import React from "react";
import GroupCard from '../components/elements/Cards/groupCard';
import VProgressBar from '../components/elements/ProgressBar'
import Notification from "../components/elements/Notification";
import StudentCard from "../components/elements/Cards/studentCard";
import Container from "@material-ui/core/Container";
import {Jumbotron, Row, Col} from "react-bootstrap";
import "../../pageDesignspecs/mentorPg.css"

class MentorDashboard extends React.Component {
    render() {
        return <Container >
            <Jumbotron>

                <h1> Welcome Back!</h1>
                <p>
                    Group progress
                    <Container>
                        <VProgressBar/>
                    </Container>
                </p>
                <p>
                    <Notification/>
                </p>
            </Jumbotron>
            <Row>
                <Col>
                    <GroupCard />
                </Col>
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
            </Row>
        </Container>
    }
}

export default MentorDashboard;
