import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

class HoursTable extends Component {
    render() {

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Hours</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Organization Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>10/11/20</th>
                        <th>5 hours 15 min</th>
                        <th>Required</th>
                        <th>Pending</th>
                        <th>YMCA <Button>More Info</Button></th>
                    </tr>
                </tbody>
            </Table>

        )
    }
}

export default HoursTable;