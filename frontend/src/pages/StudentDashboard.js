import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import VProgressBar from '../components/elements/ProgressBar'
import Container from 'react-bootstrap/Container';
// import Notification from "../components/elements/Notification";
import ReportHours from "../components/input/ReportHours";
import UserPic from "../components/elements/Cards/userPic";
import "../../pageDesignspecs/studentPg.css"
// import Row from "react-bootstrap";
// import Col from "react-bootstrap";

class StudentDashboard extends React.Component {
    render() {
        return <Container>
            <Jumbotron className="jumbotron2">
                <h1>Welcome Back!</h1>
                <p>
                    Your Cumulative progress
                    <Container>
                        <VProgressBar/>
                    </Container>
                </p>
                <p>
                    <Container>
                        <UserPic/>
                    </Container>
                </p>
                <p>
                    <Container>
                        <ReportHours buttonLabel="Report Hours" addItemToState={this.addItemToState}/>
                    </Container>
                </p>


                {/*<p>*/}
                {/*    <Notification/>*/}
                {/*</p>*/}
            </Jumbotron>

        </Container>
    }
}


export default StudentDashboard;