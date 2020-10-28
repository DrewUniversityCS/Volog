import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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


    render() {
        return <Card>
            <Card.Header>Notifications </Card.Header>
            <ListGroup>
                <ListGroup>
                    <ListGroup.Item>Report Hours Approval</ListGroup.Item>
                    <ListGroup.Item>Report Hours Approval</ListGroup.Item>
                    <ListGroup.Item>Report Hours Approval</ListGroup.Item>
                </ListGroup>
            </ListGroup>
        </Card>

    }
}

export default Notification;