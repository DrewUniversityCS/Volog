import React, {Component} from 'react';
import {
  Card, CardImg, Button
} from 'react-bootstrap';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "@material-ui/core/Container";


class GroupCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Mentor: 'Deja',
            StuNames: ['Perrfection', 'Mahmoud', 'David']
        }
    }

    addNote(){
        var StuName = "";
        var i;
        for (i = 0; i < this.state.notes.length; i++) {
          StuName = this.state.StuNames[i];
          return <ListGroup.Item> StuName </ListGroup.Item>;
        }
    }

    render(){
    return<Container>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Mentor: Deja </Card.Title>
          <Card.Subtitle>Students:  </Card.Subtitle>
          <Card.Text>
            Perrfection
            Mahmoud
            David
          </Card.Text>
          <Button>Button</Button>
        </Card.Body>
      </Card>
    </Container>
  }
}

export default GroupCard;