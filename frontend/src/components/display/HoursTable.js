import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';

class HoursTable extends Component {
    render() {
        const items = this.props.items.map(item => {
            return (
                <tr key={item.pk}>
                    <td>{item.date_of_activity}</td>
                    <td>{item.number_of_hours}</td>
                    <td>{item.number_of_minutes}</td>
                    <td>{item.type_of_hour}</td>
                    <td>{item.learning_goal}</td>
                    <td>{item.pending_status}</td>
                </tr>
            )
        })

        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Hours</th>
                    <th>Minutes</th>
                    <th>Type</th>
                    <th>Learning Goal</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {items}
                </tbody>
            </Table>

        )
    }
}

export default HoursTable;