import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import DataTable from "../components/elements/DataTable";
import ModalForm from "../components/common/Modal";

class PrototypeDashboard extends Component {
    state = {
        items: []
    }

    getItems() {
        fetch("api/students/")
            .then(response => response.json())
            .then(items => this.setState({items}))
            .catch(err => console.log(err))
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

    deleteItemFromState = (id) => {
        const updatedItems = this.state.items.filter(item => item.student_id !== id)
        this.setState({items: updatedItems})
    }

    componentDidMount() {
        this.getItems()
    }

    render() {
        return (
            <Container className="App" style={{
                backgroundColor: 'c0c6c6',
                width: '100%',
                height: '800px',
                padding: '20px'
            }}>
                <Row>
                    <Col>
                        <DataTable items={this.state.items} updateState={this.updateState}
                                   deleteItemFromState={this.deleteItemFromState}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default PrototypeDashboard;