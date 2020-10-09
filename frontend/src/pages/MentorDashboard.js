import React from "react";
import GroupCard from '../components/elements/groupCard';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import VProgressBar from '../components/elements/ProgressBar'
import Container from 'react-bootstrap/Container';
import Notification from "../components/elements/Notification";

class MentorDashboard extends React.Component {
    render(){
        return <div>
            <Container className="justify-content-lg-center">
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
            <GroupCard/>
            </Container>
        </div>
    }
}

export default MentorDashboard;