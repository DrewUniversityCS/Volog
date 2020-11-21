import React from 'react';
import {Redirect} from "react-router-dom";
import {Button, Container, Form} from "react-bootstrap";
import {MDBTooltip} from "mdbreact";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "../static/css/pages/contactForm.css";
import {postFeedbackForm} from "../functions/services/api/postFeedbackForm";

export class ContactUs extends React.Component {
    state = {
        message: '',
        redirect: false
    }

    handleSubmit = () => {
        this.setState(
            {
                redirect: true
            }
        );
        postFeedbackForm(this);
    };


    render(){
        let redirect;
        if(this.state.redirect === true){
            redirect = <Redirect to="/app/"/>
        }else{
            redirect = <div/>
        }

        return <Container>
            {redirect}
            <Form className="form-bg">
                <Form.Text className="text-center pb-4">
                    <h1>
                        Do you have any feedback regarding the platform or feature ideas?
                    </h1>
                    <h2>
                        Use this form to share your ideas with the development team.
                    </h2>

                </Form.Text>
                <Form.Group controlId="message" className="pb-5">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={5}
                                  placeholder="Share your thoughts with us! We are always looking for ways to improve Volog."
                                  value={this.state.message}
                                  onChange={event => {
                                      this.setState({
                                          message: event.target.value
                                      });
                                  }}/>
                </Form.Group>
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
            </Form>
        </Container>
    }
}