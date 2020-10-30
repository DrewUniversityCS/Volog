import Navbar from "react-bootstrap/Navbar";
import {Nav, NavItem} from "react-bootstrap";
import React from "react";
import "../../static/css/components/navbar.css";
import {getSessionUser} from "../../functions/services/api/getSessionUser";
import {Link} from "react-router-dom";

class NavBar extends React.Component {

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

    roleDict(roleID){
        if(roleID === 0){
            return 'Faculty'
        }else if(roleID === 1){
            return 'Student'
        }else if(roleID === 2){
            return 'Mentor'
        }else{
            return 'Unknown'
        }
    }

    getDashboardLink(roleID){
        if (roleID === 0) {
            return <NavItem eventkey={1} href="/app/admin">
                    <Nav.Link as={Link} to="/app/admin">Dashboard</Nav.Link>
                </NavItem>
        } else if (roleID === 1) {
            return <NavItem eventkey={1} href="/app/student">
                    <Nav.Link as={Link} to="/app/student">Dashboard</Nav.Link>
                </NavItem>
        } else if (roleID === 2) {
            return <NavItem eventkey={1} href="/app/mentor">
                    <Nav.Link as={Link} to="/app/mentor">Dashboard</Nav.Link>
                </NavItem>
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
                {this.getDashboardLink(this.state.userData.role)}
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: {this.state.userData.first_name} {this.state.userData.last_name} | {this.roleDict(this.state.userData.role)}
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
