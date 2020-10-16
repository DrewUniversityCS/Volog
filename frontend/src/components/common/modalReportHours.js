import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody} from 'reactstrap';
import AddEditForm from '../input/AddStudentForm';
import Container from "@material-ui/core/Container";

class ModalReportHours extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            organization: " ",
            date: "",
            hours: "",
            type:"",
            description: " "
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
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
                    <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
                    <ModalBody>
                        <Form>
                           <FormGroup>
                               <Label for="organization">Organization</Label>
                               <Input type="text" name="Organization" id= "organization"/>
                           </FormGroup>
                           <FormGroup>
                               <Label for="date">Date</Label>
                           </FormGroup>
                           <FormGroup>
                               <Label for="hours">Hours</Label>
                           </FormGroup>
                           <FormGroup>
                               <Label for="type">Type</Label>
                           </FormGroup>
                           <FormGroup>
                               <Label for="description">Description</Label>
                               <Input type="text" name="Description" id= "description"/>
                           </FormGroup>
                      </Form>

                    </ModalBody>
                </Modal>
            </Container>
        )
    }
}

export default ModalReportHours;