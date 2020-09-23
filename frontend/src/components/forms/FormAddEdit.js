import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class AddEditForm extends React.Component {
    state = {
        name: '',
        email: '',
        student_id: ''
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitFormAdd = e => {
        console.log("submission attempted")
        console.log(this.state)
        e.preventDefault()
        fetch("api/lead/", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                student_id: this.state.student_id
            })
        })
            .then(response => response.json())
            .then(item => {
                if (Array.isArray(item)) {
                    this.props.addItemToState(item[0])
                    this.props.toggle()
                } else {
                    console.log(item)
                    console.log('failure')
                }
            })
            .catch(err => console.log(err))
    }

    submitFormEdit = e => { // This shouldn't work yet because we dont have any put requests endpoints
        e.preventDefault()
        fetch('http://localhost:3000/crud', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                student_id: this.state.student_id
            })
        })
            .then(response => response.json())
            .then(item => {
                if (Array.isArray(item)) {
                    this.props.updateState(item[0])
                    this.props.toggle()
                } else {
                    console.log('failure')
                }
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        // if item exists, populate the state with proper data
        if (this.props.item) {
            const {name, email, student_id} = this.props.item
            this.setState({name, email, student_id})
        }
    }

    render() {
        return (
            <Form onSubmit={this.submitFormAdd}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" onChange={this.onChange}
                           value={this.state.name === null ? '' : this.state.name}/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" onChange={this.onChange}
                           value={this.state.email === null ? '' : this.state.email}/>
                </FormGroup>
                <FormGroup>
                    <Label for="student_id">Student ID</Label>
                    <Input type="text" name="student_id" id="student_id" onChange={this.onChange}
                           value={this.state.student_id === null ? '' : this.state.student_id}/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default AddEditForm;