import Navbar from "react-bootstrap/Navbar";
import React, {Component} from "react";
import {Nav, NavItem} from "react-bootstrap";
import "../../static/css/components/navbar.css";
import {getSessionUser} from "../../functions/services/api/getSessionUser";

class NavBar extends Component {

    state = {
        userData: {
            first_name: '',
            last_name: '',
            email: '',
            role: 3,
            is_profile_complete: '',
            groups: []
        }
    }

    roleDict(roleID) {
        if (roleID === 0) {
            return 'Faculty'
        } else if (roleID === 1) {
            return 'Student'
        } else if (roleID === 2) {
            return 'Mentor'
        } else {
            return 'Unknown'
        }
    }

    componentDidMount() {
        getSessionUser(this);
    }

    render() {
        return (
            <Navbar bg="white" expand="sm">
                <Navbar.Brand href="/app/">
                    <img
                        src={"../../static/assets/volog_logo/green_on_gray.png"}
                        width={170}
                        height={50}
                        className="navbar-logo"
                        alt="volog logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in
                        as: {this.props.userData.first_name} {this.props.userData.last_name} | {this.roleDict(this.props.userData.role)}
                    </Navbar.Text>

                    <NavItem eventkey={1} href="/accounts/logout">
                        <Nav.Link href="/accounts/logout">Logout</Nav.Link>
                    </NavItem>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;
