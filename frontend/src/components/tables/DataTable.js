import React, {Component} from 'react';
import {Table} from 'reactstrap';
import ModalForm from '../modals/Modal';

class DataTable extends Component {
    render() {
        const items = this.props.items.map(item => {
            return (
                <tr key={item.student_id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.student_id}</td>
                    <td>
                        <div style={{width: "110px"}}>
                            <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
                        </div>
                    </td>
                </tr>
            )
        })

        return (
            <Table responsive hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Student ID</th>
                </tr>
                </thead>
                <tbody>
                {items}
                </tbody>
            </Table>
        )
    }
}

export default DataTable;