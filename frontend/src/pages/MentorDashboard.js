import React from "react";
import Card from 'react-bootstrap/Card';
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
           <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Container>
        </div>
    }
}

export default MentorDashboard;