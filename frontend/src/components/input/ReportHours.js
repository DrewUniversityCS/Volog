import React, {useState} from 'react';
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../static/css/components/add-student-form.css";
import "../../static/css/index.css";

function ReportHours() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="secondary" onClick={handleShow}>
                Report Hours
            </Button>

            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} onHide={handleClose} animation={false}>

                <Form className={"add-student-form"}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Date of Activity</Form.Label>
                                <Row>
                                    <DatePicker/>
                                </Row>
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
                                onClick={handleClose}>Cancel</Button>
                        <Button className="cushion" variant="outline-success" block
                                onClick={handleClose}>Submit</Button>
                    </Col>
                </Form>
            </Modal>
        </div>
    )
}

export default ReportHours;