import React from "react";
import GroupCard from '../components/elements/Cards/groupCard';
import VProgressBar from '../components/elements/ProgressBar'
import Notification from "../components/elements/Notification";
import StudentCard from "../components/elements/Cards/studentCard";
import Container from "@material-ui/core/Container";
import {Jumbotron, Row, Col} from "react-bootstrap";

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
        return <Container className="justify-content-lg-center">
            <Jumbotron>
                <h1>Welcome Back!</h1>
                <p>
                    Group Cumulative progress
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
                    <GroupCard/>
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