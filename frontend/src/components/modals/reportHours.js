import React from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {postHour} from "../../functions/services/api/student_requests/postHour";
import "../../static/css/components/report-hours.css";
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {MDBBtn, MDBCardHeader, MDBIcon, MDBTooltip} from "mdbreact";








class ReportHours extends React.Component {

    default_state = {
        show: false,
        date_of_activity: '',
        number_of_hours: '1',
        number_of_minutes: '0',
        type_of_hour: 'Required',
        learning_goal: 'Confidence',
        activity_description: '',
        activity_category: 'Participation in Student Government',
        dateError: '',
        hourMinError: '',
        descriptionError: '',
    }
    state = this.default_state

    validate =() => {
        let dateError = "";
        let hourMinError =  "";
        let descriptionError = "";
        // let dateAct = state.date_of_activity.split('-');
        // let dateCurrent = .split('-');

        // if ( dateAct[2] >= dateCurrent[2]){
        //     dateError = 'Date is invalid. Be sure the date has passed.';
        // }
        // else if (date[1] >= dateCurrent[1] && dateAct[2] === dateCurrent[2]){
        //     dateError = 'Date is invalid. Be sure the date has passed.';
        // }
        // else if (date[0] >= dateCurrent[0] && dateAct[1] === dateCurrent[1] && dateAct[2] === dateCurrent[2]){
        //     dateError = 'Date is invalid. Be sure the date has passed.';
        // }

        // if (dateError) {
        //     this.setState({dateError});
        //     return false;
        // }

        if (this.state.number_of_hours === '0' && this.state.number_of_minutes === '00'){
            hourMinError = 'Please add duration.';
        }

        if (hourMinError) {
            this.setState({hourMinError});
            return false;
        }

        if (this.state.activity_category === "other" && this.state.activity_description === null ){
            descriptionError = 'Please include description.';
        }

        if (descriptionError) {
            this.setState({descriptionError});
            return false;
        }

        return true;
    }

    handleClose = () => {
        this.setState(this.default_state);
    }
    handleShow = () => {
        this.setState({show: true});
    };
    handleSubmit = () => {
        const isValid = this.validate();
        if (isValid){
            postHour(this);
        this.handleClose();
        }
    };

    render() {
        let category_options;

        if (this.props.activity_categories && !!this.props.activity_categories.length) {
            category_options = this.props.activity_categories.map(category => {
                    return <option>{category.title}</option>
                }
            )
        }


        return <div>
            <MDBBtn color="primary" onClick={this.handleShow}>
                <MDBIcon icon="clock" className="mr-1"/> Report Hours
            </MDBBtn>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.show} onHide={this.handleClose} animation={true}>
                <MDBCardHeader className="aqua-gradient">
                    <div className="text-center white-text"><MDBIcon far icon="paper-plane"/> Hour Report</div>
                </MDBCardHeader>

                <Form className={"report-hours"}>
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
                                <Form.Text className={"errorStyle"} >
                                    {this.state.dateError}
                                </Form.Text>
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
                                                <option>0</option>
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
                                            <Form.Text className={"errorStyle"} >
                                                {this.state.hourMinError}
                                            </Form.Text>
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
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select" name="category"
                                              value={this.state.activity_category}
                                              onChange={event => {
//                                              console.log(event.target.value)
                                                  this.setState({

                                                      activity_category: event.target.value
                                                  });
                                              }
                                              }>
                                    {category_options}
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
                                              }/>
                                <Form.Text className={"errorStyle"} >
                                    {this.state.descriptionError}
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row md={{span: 2, offset: 5}}>
                        <Col align="center">
                            <MDBTooltip
                                domElement
                                tag="span"
                                placement="bottom">
                                <Button className="submit-button" variant="success"
                                        onClick={this.handleSubmit}>
                                    <CheckCircleIcon/>
                                </Button>
                                <span>Submit</span>
                            </MDBTooltip>
                        </Col>
                        <Col align="center">
                            <MDBTooltip
                                domElement
                                tag="span"
                                placement="bottom">
                                <Button className="cancel-button" variant="danger"
                                        onClick={this.handleClose}>
                                    <CancelIcon/>
                                </Button>
                                <span>Cancel</span>
                            </MDBTooltip>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    }
}

export default ReportHours;