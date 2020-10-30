import React from "react";
import Container from "@material-ui/core/Container";
import {Jumbotron} from "react-bootstrap";
import "../static/css/pages/mentorPg.css";

import Mentor from './Mentor/mentorsIndex';

class MentorDashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        let com = this
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let role = JSON.parse(xhttp.responseText).role
                if (role === 0 || role === 2) {
                    com.setState({
                        isLoading: false
                    });
                } else {
                    window.location = '/app'
                }
            }
        };
        //I added these 4 lines to prevent the student from accessing his page.
        xhttp.open("GET", "/api/details/");
        xhttp.send();
    }

    render() {
        if (this.state.isLoading) return <h1>Loading...</h1>;
        return <div style={{background: "#72be72"}} className={"my-auto overflow-hidden pt-3"}>
            <Container>
                <Jumbotron className="jumbotron1 shadow-md">
                    <Mentor/>
                </Jumbotron>
            </Container>
        </div>
    }
}

export default MentorDashboard;
