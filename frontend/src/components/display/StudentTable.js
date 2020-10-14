import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';

class StudentTable extends Component {
    render() {
        const items = this.props.items.map(item => {
            return (
                <tr key={item.student_id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.student_id}</td>
                    <td>{item.class_standing}</td>
                    <td>{item.DAS_mentor}</td>
                    <td>{item.hours_complete}</td>
                </tr>
            )
        })

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Student ID</th>
                        <th>Class Standing</th>
                        <th>Mentor</th>
                        <th>% Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </Table>

        )
    }
}

export default StudentTable;