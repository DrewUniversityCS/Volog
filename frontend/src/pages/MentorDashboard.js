import React from "react";
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'


class MentorDashboard extends React.Component {
    render(){
        return <div>
            <Container>
            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
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