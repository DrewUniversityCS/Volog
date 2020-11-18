import React from "react";
import {Button, Container, Form} from "react-bootstrap";
import {MDBTooltip} from "mdbreact";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "../static/css/pages/bugReport.css";

export class BugReport extends React.Component {

    render() {
        return <Container>
            <Form className="bug-report">
                <Form.Text className="text-center">
                    <h1>
                        We are sorry you are having issues.
                    </h1>
                    <h2>
                        Fill out this form so our team can fix it.
                    </h2>

                </Form.Text>
                <Form.Group controlId="category">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5}
                                  placeholder="Please describe the issue in as much details as you can."/>
                </Form.Group>
                <Form.Group controlId="furtherContact">
                    <Form.Label>
                        Would you be okay with us reaching out in case further information is needed?
                    </Form.Label>
                    <Form.Check type="checkbox" label="Yes"/>
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