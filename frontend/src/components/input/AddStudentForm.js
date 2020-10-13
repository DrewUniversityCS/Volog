import React from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {postNewStudent} from "../../functions/services/api/postNewStudent";
import Paper from "@material-ui/core/Paper";

class AddStudentForm extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        student_id: '',
        class_standing: '',
        mentor: '',
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitFormAdd = e => {
        e.preventDefault()
        postNewStudent(this).then(response_item => {
            if (Array.isArray(response_item)) {
                this.props.addItemToState(response_item[0])
                this.props.toggle()
            } else {
                console.log(response_item)
                console.log('failure')
            }
        }).catch(err => console.log(err));
    }


    componentDidMount() {
        // if item exists, populate the state with proper data
        if (this.props.item) {
            const {first_name, last_name, email, student_id, class_standing, mentor} = this.props.item
            this.setState({first_name, last_name, email, student_id, class_standing, mentor})
        }
    }

    render() {
        return (
            <Paper style={{padding: '10px'}}>
                <Form onSubmit={this.submitFormAdd}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder={"First Name"} onChange={this.onChange}>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                    Your first name as it appears on your student id.
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
                                <Form.Control onChange={this.onChange} as="select" multiple>
                                    <option>FR</option>
                                    <option>SO</option>
                                    <option>JR</option>
                                    <option>SR</option>
                                    <option>PG</option>
                                    <option>GR</option>
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
                                    Your mentors name.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Paper>
        );
    }
}

export default AddStudentForm;