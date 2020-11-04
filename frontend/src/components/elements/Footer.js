import React, {Component} from "react";
import {MDBCol, MDBContainer, MDBFooter, MDBRow} from "mdbreact";
import {Nav, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <MDBFooter color="stylish-color" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center">
                    <MDBCol>
                        <MDBRow>
                            <NavItem eventkey={1} href="/app/contact_us">
                                <Nav.Link as={Link} to="/app/contact_us">Contact Us</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={1} href="/app/FAQ">
                                <Nav.Link as={Link} to="/app/FAQ">FAQ</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={1} href="/app/bug_report">
                                <Nav.Link as={Link} to="/app/bug_report">Report a Bug</Nav.Link>
                            </NavItem>
                        </MDBRow>
                    </MDBCol>

                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: Team Volog
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;