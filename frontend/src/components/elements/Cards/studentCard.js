import React, {Component} from 'react';
import VProgressBar from "../ProgressBar";
import {
  Card, Button
} from 'react-bootstrap';
import {Container} from "@material-ui/core";
import "../../../../pageDesignspecs/mentorPg.css"

class StudentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: 'Perrfection'
        }

    }

    render(){
    return<Container>
      <Card style={{ width: '45rem' }}>
        <Card.Body>
          <Card.Title> Sam </Card.Title>
          <VProgressBar/>
          <Button>See More</Button>
        </Card.Body>
      </Card>
    </Container>
  }
}

export default StudentCard;