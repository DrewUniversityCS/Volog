import React from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {postHour} from "../../functions/services/api/student_requests/postHour";

class ReportHours extends React.Component {
    state = {
        show: false,
        date_of_activity: '',
        number_of_hours: '1',
        number_of_minutes: '0',
        type_of_hour: 'Required',
        learning_goal: 'Confidence',
        activity_description: '',
    }


    handleClose = () => {
        this.setState({show: false})
    };
    handleShow = () => {
        this.setState({show: true})
    };
    handleSubmit = () => {
        postHour(this)
        this.props.handleChange()
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

                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="dob">
                                <Form.Label>Date of Activity</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Activity"
                                              value={this.state.date_of_activity}
                                              onChange={event => {
                                                  this.setState({
                                                      date_of_activity: event.target.value
                                                  });
                                              }}/>
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
                                            <Form.Control as="select" name="hours"
                                                          value={this.state.number_of_hours}
                                                          onChange={event => {
                                                              this.setState({
                                                                  number_of_hours: event.target.value
                                                              });
                                                          }}>
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
                                            <Form.Control as="select" name="minutes"
                                                          value={this.state.number_of_minutes}
                                                          onChange={event => {
                                                              this.setState({
                                                                  number_of_minutes: event.target.value
                                                              });
                                                          }
                                                          }>
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
                                <Form.Control as="select" name="hour type"
                                              value={this.state.type_of_hour}
                                              onChange={event => {
                                                  this.setState({
                                                      type_of_hour: event.target.value
                                                  });
                                              }
                                              }>
                                    <option>Required</option>
                                    <option>Active</option>
                                    <option>Pre-Approved</option>
                                    <option>Receptive</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Learning Goal</Form.Label>
                                <Form.Control as="select" name="learning goal"
                                              value={this.state.learning_goal}
                                              onChange={event => {
                                                  this.setState({
                                                      learning_goal: event.target.value
                                                  });
                                              }
                                              }>
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
                                              rows="3" name="description"
                                              value={this.state.activity_description}
                                              onChange={event => {
                                                  this.setState({
                                                      activity_description: event.target.value
                                                  });
                                              }
                                              }>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col md={{span: 2, offset: 5}}>
                        <Button className="cushion" variant="outline-success"
                                onClick={this.handleClose}>Cancel</Button>
                        <Button className="cushion" variant="outline-success"
                                onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                </Form>
            </Modal>
        </div>
    }
}

export default ReportHours;