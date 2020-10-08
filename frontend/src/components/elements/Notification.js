import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            request: ""
        }

    }

    render() {
        return<div>
            <ListGroup>
              <ListGroup.Item>Note 1</ListGroup.Item>
              <ListGroup.Item>Note 2</ListGroup.Item>
              <ListGroup.Item>Note 3</ListGroup.Item>
            </ListGroup>
        </div>

    }
}

export default Notification;