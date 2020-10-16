import React from "react";
import GroupCard from '../components/elements/Cards/groupCard';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import VProgressBar from '../components/elements/ProgressBar'
import Container from 'react-bootstrap/Container';
import Notification from "../components/elements/Notification";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import StudentCard from "../components/elements/Cards/studentCard";
import ModalReportHours from "../components/common/modalReportHours";


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
                  <ModalReportHours buttonLabel="Report Hours" addItemToState={this.addItemToState}/>
              </p>
              <p>
                <Notification/>
              </p>
            </Jumbotron>

            </Container>
    }
}


export default StudentDashboard;