import Navbar from "react-bootstrap/Navbar";
import {Nav, NavItem} from "react-bootstrap";
import React from "react";
import Link from "react-router-dom/Link";
import "../../static/css/components/navbar.css";
import img from "../../static/assets/volog_logo/green_on_gray.png"
class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="sm" variant="dark">
                <Navbar.Brand>
                    <img
                        src={img}
                        width={170}
                        height={50}
                        className="navbar-logo"
                        alt="volog logo"
                    />
                </Navbar.Brand>

                <NavItem eventkey={1} href="/accounts/login">
                 <a href="/accounts/login"> Login</a>
                </NavItem>
                <NavItem eventkey={1} href="/app/mentor">
                  <Nav.Link as={Link} to="/app/mentor" >Mentor</Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href="/app/dashboard">
                  <Nav.Link as={Link} to="/app/dashboard" >PrototypeDashboard</Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href="/app/student">
                  <Nav.Link as={Link} to="/app/student" >Student</Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href="/app/admin">
                  <Nav.Link as={Link} to="/app/admin" >Admin</Nav.Link>
                </NavItem>
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
