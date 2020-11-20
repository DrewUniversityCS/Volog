import React from "react";
import {Button, Container, Form} from "react-bootstrap";
import {MDBTooltip} from "mdbreact";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "../static/css/pages/contactForm.css";
import {postBugReport} from "../functions/services/api/postBugReport";
import {Redirect} from "react-router-dom";

export class BugReport extends React.Component {
    state = {
        can_contact: true,
        message: '',
        redirect: false
    }

    handleSubmit = () => {
        this.setState(
            {
                redirect: true
            }
        )
        postBugReport(this);
    };

    render() {
        let redirect;
        if(this.state.redirect === true){
            redirect = <Redirect to="/app/"/>
        }else{
            redirect = <div/>
        }

        return <Container>
            {redirect}
            <Form className="form-bg">
                <Form.Text className="text-center">
                    <h1>
                        We are sorry you are having issues.
                    </h1>
                    <h2>
                        Fill out this form so our team can fix it.
                    </h2>

                </Form.Text>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5}
                                  placeholder="Please describe the issue in as much details as you can."
                                  value={this.state.message}
                                  onChange={event => {
                                      this.setState({
                                          message: event.target.value
                                      });
                                  }}/>
                </Form.Group>
                <Form.Group controlId="furtherContact">
                    <Form.Label>
                        Would you be okay with us reaching out in case further information is needed?
                    </Form.Label>
                    <Form.Check type="checkbox" label="Yes, I can be reached out to."
                                onChange={() => {
                                    if (this.state.can_contact === true) {
                                        this.setState({can_contact: false})
                                    }else{
                                        this.setState({can_contact: true})
                                    }
                                }}
                    />
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