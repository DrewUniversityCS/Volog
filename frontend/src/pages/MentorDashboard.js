import React from "react";
import Notification from "../components/elements/Notification";
import Container from "@material-ui/core/Container";
import {Col, Jumbotron, Row} from "react-bootstrap";
import "../static/css/pages/mentorPg.css";
import Redirect from "react-router-dom/es/Redirect";
import Mentor from './Mentor/mentorsIndex'

class MentorDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userData
        };
    }


    render() {
        let role = this.props.userData.role;
        console.log(role);
        if (role === 1) {
            return <Redirect to="/app/student" push />
        } else if (role === 0) {
            return <Redirect to="/app/" push />
        }
        return <div style={{background: "#72be72"}} className={"my-auto overflow-hidden pt-3"}>
            <Container>
                <Jumbotron className="jumbotron1 shadow-md">
                    <Mentor user={this.state.user}/>
                </Jumbotron>
            </Container>
        </div>
    }
}

export default MentorDashboard;

