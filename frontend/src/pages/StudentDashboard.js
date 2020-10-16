import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import VProgressBar from '../components/elements/ProgressBar'
import Container from 'react-bootstrap/Container';
import Notification from "../components/elements/Notification";
import ReportHours from "../components/input/ReportHours";


class StudentDashboard extends React.Component {
    render(){
        return <Container className="justify-content-lg-center">
            <Jumbotron>
              <h1>Welcome Back!</h1>
              <p>
                  Group Cumulative progress
                  <Container>
                      <VProgressBar/>
                  </Container>
                  <ReportHours buttonLabel="Report Hours" addItemToState={this.addItemToState}/>
              </p>
              <p>
                <Notification/>
              </p>
            </Jumbotron>

            </Container>
    }
}


export default StudentDashboard;