import React, {Component} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCollapse,
    MDBContainer,
    MDBHamburgerToggler,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav
} from 'mdbreact';
import {Tabs, Tab} from "react-bootstrap";
import HoursTable from "./HoursTable";
import HoursStats from "./HoursStats";

class HoursDataView extends Component {

    state = {
        active_hour_view: 'table',
        collapse1: false,
        collapseID: ''
    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    };

    toggleSingleCollapse = collapseId => {
        this.setState({
            ...this.state,
            [collapseId]: !this.state[collapseId]
        });
    }


    render() {
        let active_hour_view;
        if (this.state.active_hour_view === "table") {
            active_hour_view = <HoursTable items={this.props.items} activity_categories={this.props.activity_categories}
                                           refreshHourData={this.props.refreshHourData}/>
        } else {
            active_hour_view =
                <HoursStats items={this.props.items} activity_categories={this.props.activity_categories}/>
        }
        return (
            <MDBCard>
                <MDBContainer>
                    <MDBNavbar
                        color="blue"
                        style={{marginTop: '20px'}}
                        light
                    >
                        <MDBContainer>
                            <MDBNavbarBrand className="white-text">Your Hours</MDBNavbarBrand>
                            <MDBHamburgerToggler
                                id="hamburger1"
                                onClick={() => this.toggleSingleCollapse('collapse1')}
                            />
                            <MDBCollapse
                                id='navbarCollapse1'
                                isOpen={this.state.collapse1}
                                navbar
                            >
                                <MDBNavbarNav className="nav-justified">
                                    <Tabs
                                        variant={'pills'}
                                        defaultActiveKey="table"
                                        activeKey={this.state.active_hour_view}
                                        onSelect={(k) => this.setState({active_hour_view: k})}
                                        id="hour-view-toggle">
                                        <Tab tabClassName="white-text" eventKey="table" title="Table View"/>
                                        <Tab tabClassName="white-text" eventKey="stats" title="Statistics"/>
                                    </Tabs>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </MDBContainer>
                <MDBCardBody>
                    {active_hour_view}
                </MDBCardBody>
            </MDBCard>
        )
    }
}

export default HoursDataView;