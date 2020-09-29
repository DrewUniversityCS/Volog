import Navbar from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";
import React from "react";

class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" expand="sm" variant="dark">
                <Navbar.Brand>
                    <img
                        src={"../../../static/assets/volog_logo/green_on_gray.png"}
                        width={170}
                        height={50}
                        className="navbar-logo"
                        alt="volog logo"
                    />
                </Navbar.Brand>

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
