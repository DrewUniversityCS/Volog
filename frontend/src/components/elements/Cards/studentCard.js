import React, {Component} from 'react';
import {Button, Card} from 'react-bootstrap';
import "../../../static/css/pages/mentorPg.css"

class StudentCard extends Component {


    render() {
        const {id, first_name, last_name} = this.props.mentor
        return <div className="px-2">
            <Card className={"shadow-md my-2"} style={{borderRadius: "7px"}}>
                <Card.Body>
                    <Card.Title> {first_name} {last_name} </Card.Title>
                    <Button className={"mt-1"}>See More</Button>
                </Card.Body>
            </Card>
        </div>
    }
}

export default StudentCard;
