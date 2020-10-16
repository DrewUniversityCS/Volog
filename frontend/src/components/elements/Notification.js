import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import {Container} from "@material-ui/core";

class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [
                "note 1",
                "note 2",
                "note 3"
            ]
        }

    }

    addNote(){
        let text = "";
        let Note = "";
        let i;
        for (i = 0; i < this.state.notes.length; i++) {
          Note = this.state.notes[i];
          text += Notes[i] + "<br>";
        }
        return <ListGroup.Item> text </ListGroup.Item>
    }

    render() {
        return<Container>
            <ListGroup>

            </ListGroup>
        </Container>

    }
}

export default Notification;