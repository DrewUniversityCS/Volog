import React, {Component} from 'react';
import VProgressBar from "../ProgressBar";
import {Button, Card} from 'react-bootstrap';
import {Container} from "@material-ui/core";
import "../../../static/css/pages/mentorPg.css"

class StudentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: 'Perrfection'
        }

    }

    render() {
        return <Container>
            <Card style={{width: '45rem'}}>
                <Card.Body>
                    <Card.Title> Mahmoud </Card.Title>
                    <VProgressBar/>
                    <Button>See More</Button>
                </Card.Body>
            </Card>
        </Container>
    }
}

export default StudentCard;