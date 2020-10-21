import React from "react";
import GroupCard from '../components/elements/Cards/groupCard';
import VProgressBar from '../components/elements/ProgressBar'
// import Notification from "../components/elements/Notification";
import StudentCard from "../components/elements/Cards/studentCard";
import Container from "@material-ui/core/Container";
import {Jumbotron, Row, Col} from "react-bootstrap";
import "../../pageDesignspecs/mentorPg.css";
import Notification from "../components/elements/Notification";

class MentorDashboard extends React.Component {

    constructor(props) {
    super(props);

    this.state = {
        isLoading: true
    };
  }
    componentDidMount() {
        let com = this
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               console.log();
               let role = JSON.parse(xhttp.responseText).role
                if (role === 0 || role === 2){
                    com.setState({
                      isLoading: false
                    });
                }
                else{
                   window.location='/app'
                }
            }
        };
        //I added these 4 lines to prevent the student from accessing his page.
        xhttp.open("GET", "/user/api/details/");
        xhttp.send();
    }

    render() {
        if (this.state.isLoading) return <h1>Loading...</h1>;
        return <Container>
            <Jumbotron className="jumbotron1">
                <Row>
                    <Col md={{span: 3}}>
                        <Row>
                            <h1>Welcome Back!</h1>
                        </Row>
                        <Row>
                            <GroupCard/>
                        </Row>
                        <Row md={{offset: 1}}>
                            <Notification/>
                        </Row>
                    </Col>

                    <Col>
                        <Row>
                            <Container>
                                <p className="progressBarr">
                                    Group cumulative progress
                                </p>

                                <VProgressBar className="VProgressBar"/>
                            </Container>
                        </Row>
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

            </Jumbotron>
        </Container>
    }
}

export default MentorDashboard;
