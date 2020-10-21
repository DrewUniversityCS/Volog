import React, {Component} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import StudentTable from "../components/display/StudentTable";
import AddStudentForm from "../components/input/AddStudentForm";
import {getFullStudentList} from "../functions/services/api/getFullStudentList";

class PrototypeDashboard extends Component {
    state = {
        items: []
    }

    addItemToState = (item) => {
        this.setState(prevState => ({
            items: [...prevState.items, item]
        }))
        window.location.reload(false);
    }

    updateState = (item) => {
        const itemIndex = this.state.items.findIndex(data => data.student_id === item.student_id)
        const newArray = [
            // destructure all items from beginning to the indexed item
            ...this.state.items.slice(0, itemIndex),
            // add the updated item to the array
            item,
            // add the rest of the items to the array from the index after the replaced item
            ...this.state.items.slice(itemIndex + 1)
        ]
        this.setState({items: newArray})
    }

    componentDidMount() {
        getFullStudentList(this);
        console.log(this.state);
    }

    render() {
        return (
            <Container className="prototype-dashboard">
                <Row>
                    <Col>
                        <StudentTable items={this.state.items} updateState={this.updateState}/>
                    </Col>
                </Row>
                <Row>
                    <AddStudentForm addItemToState={this.addItemToState}/>
                </Row>
            </Container>
        )
    }
}


export default PrototypeDashboard;