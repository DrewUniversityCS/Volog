import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class AddEditForm extends React.Component {
    state = {
        id: 0,
        name: '',
        email: '',
        student_id: ''
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitFormAdd = e => {
        e.preventDefault()
        fetch('http://localhost:3000/crud', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
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
                    console.log('failure')
                }
            })
            .catch(err => console.log(err))
    }

    submitFormEdit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/crud', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
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
            const {id, name, email, student_id} = this.props.item
            this.setState({id, name, email, student_id})
        }
    }

    render() {
        return (
            <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
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