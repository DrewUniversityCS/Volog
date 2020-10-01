import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import ModalForm from '../common/ModalForm';

class DataTable extends Component {
    render() {
        const items = this.props.items.map(item => {
            return (
                <tr key={item.student_id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.student_id}</td>
                    <td>{item.class_standing}</td>
                    <td>
                        <div style={{width: "110px"}}>
                            <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
                        </div>
                    </td>
                </tr>
            )
        })

        return (
            <Table responsive hover bordered={true} className={"table"} color={"white"}>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Student ID</th>
                    <th>Class Standing</th>
                    <th/>
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