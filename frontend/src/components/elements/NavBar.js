import Navbar from "react-bootstrap/Navbar";
import {Nav, NavItem, Form, FormControl, Button} from "react-bootstrap";
import React from "react";
import Link from "react-router-dom/Link";
import "../../../static/css/components/navbar.css";

class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="sm" variant="dark">
                <Navbar.Brand>
                    <img
                        src={"../../../static/assets/volog_logo/green_on_gray.png"}
                        width={170}
                        height={50}
                        className="navbar-logo"
                        alt="volog logo"
                    />
                </Navbar.Brand>

                <NavItem eventkey={1} href="/login">
                  <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href="/mentor">
                  <Nav.Link as={Link} to="/mentor" >Mentor</Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href="/dashboard">
                  <Nav.Link as={Link} to="/dashboard" >PrototypeDashboard</Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href="/student">
                  <Nav.Link as={Link} to="/student" >Student</Nav.Link>
                </NavItem>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-primary">Search</Button>
                </Form>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default NavBar;
