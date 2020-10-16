import React from 'react';
import PopupModal from '../common/PopupModal';
import Container from "@material-ui/core/Container";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ReportHours extends PopupModal {
    constructor(props) {
        super(props)
        this.state = {
            organization: " ",
            date: "",
            hours: "",
            type: "",
            description: " "
        }
    }

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>

        const label = this.props.buttonLabel

        let button = ''
        let title = ''

        if (label === 'Edit') {
            button = <Button
                color="warning"
                onClick={this.toggle}
                style={{float: "left", marginRight: "10px"}}>{label}
            </Button>
            title = 'Edit Item'
        } else {
            button = <Button
                color="success"
                onClick={this.toggle}
                style={{float: "left", marginRight: "10px", backgroundColor: "#2d8e94"}}>{label}
            </Button>
            title = 'Add New Item'
        }


        return (
            <Container>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <Modal.Header toggle={this.toggle} close={closeBtn}>{title}</Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Date of Activity</Form.Label>
                                            <DatePicker selected={this.state.date} onChange=
                                                {date => this.state.date=date} />
                                        <Form.Text className="text-muted">
                                            Date of Activity.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control placeholder={"Last Name"} onChange={this.onChange}>
                                        </Form.Control>
                                        <Form.Text className="text-muted">
                                            Your last name as it appears on your student id.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control placeholder={"user@domain.com"} onChange={this.onChange}>
                                        </Form.Control>
                                        <Form.Text className="text-muted">
                                            Your Drew University email.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Student ID</Form.Label>
                                        <Form.Control placeholder={"0000000"} onChange={this.onChange}>
                                        </Form.Control>
                                        <Form.Text className="text-muted">
                                            Your Student ID.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Class Standing</Form.Label>
                                        <Form.Control onChange={this.onChange} as="select">
                                            <option>Freshman</option>
                                            <option>Sophomore</option>
                                            <option>Junior</option>
                                            <option>Senior</option>
                                            <option>Graduate</option>
                                            <option>Post Graduate</option>
                                        </Form.Control>
                                        <Form.Text className="text-muted">
                                            Your current class standing.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Mentor</Form.Label>
                                        <Form.Control placeholder={"Mentor Name"} onChange={this.onChange}>
                                        </Form.Control>
                                        <Form.Text className="text-muted">
                                            Your mentor's name.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        )
    }
}

export default ReportHours;