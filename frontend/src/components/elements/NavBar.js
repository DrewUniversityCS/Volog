import Navbar from "react-bootstrap/Navbar";
import {Nav, NavItem} from "react-bootstrap";
import React from "react";
import "../../static/css/components/navbar.css";
import {getSessionUser} from "../../functions/services/api/getSessionUser";

class NavBar extends React.Component {

    state = {
        userData: {
            first_name: '',
            last_name: '',
            email: '',
            role: '',
            is_profile_complete: '',
            groups: []
        }
    }

    componentDidMount() {
        getSessionUser(this);
    }

    render() {
        return (
            <Navbar bg="light" expand="sm">
                <Navbar.Brand>
                    <img
                        src={"../../static/assets/volog_logo/green_on_gray.png"}
                        width={170}
                        height={50}
                        className="navbar-logo"
                        alt="volog logo"
                    />
                </Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: {this.state.userData.first_name} {this.state.userData.last_name}
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
