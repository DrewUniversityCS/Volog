import React from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import "../../static/css/components/add-student-form.css";
import "../../static/css/index.css";

class ReportHours extends React.Component {
    state = {
        show: false,
        student: '',
        date_of_activity: '',
        number_of_hours: '',
        number_of_minutes: '',
        type_of_hour: '',
        learning_goal: '',
        activity_description: ''
    }


    handleClose = () => {
        this.setState({show: false})
    };
    handleShow = () => {
        this.setState({show: true})
    };
    handleSubmit = () => {
        this.handleClose()
    };

    render() {
        return <div>
            <Button variant="secondary" onClick={this.handleShow}>
                Report Hours
            </Button>

            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.show} onHide={this.handleClose} animation={true}>

                <Form className={"add-student-form"}>
                    <Row>
                        <Col>
                            <Form.Group controlId="dob">
                                <Form.Label>Date of Activity</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Activity"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Hours Worked</Form.Label>
                                <Col>
                                    <Row>
                                        <Col md={{span: 3}}>
                                            <Form.Label>Hours </Form.Label>
                                            <Form.Control as="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                            </Form.Control>
                                        </Col>
                                        <Col md={{span: 3}}>
                                            <Form.Label>Minutes</Form.Label>
                                            <Form.Control as="select">
                                                <option>00</option>
                                                <option>15</option>
                                                <option>30</option>
                                                <option>45</option>
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Type</Form.Label>
                                <Form.Control as="select">
                                    <option>Required</option>
                                    <option>Pre-Approved</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Learning Goal</Form.Label>
                                <Form.Control as="select">
                                    <option>Confidence</option>
                                    <option>Empathy</option>
                                    <option>Explore</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control placeholder="Describe responsibilities and activities" as="textarea"
                                              rows="3">
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col md={{span: 2, offset: 5}}>
                        <Button className="cushion" variant="outline-success" block
                                onClick={this.handleSubmit}>Cancel</Button>
                        <Button className="cushion" variant="outline-success" block
                                onClick={this.handleClose}>Submit</Button>
                    </Col>
                </Form>
            </Modal>
        </div>
    }
}

export default ReportHours;