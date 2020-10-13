import React from 'react';
import {render} from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/index.css';

import PrototypeDashboard from "./pages/PrototypeDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/elements/NavBar";

const App = () => {

    return (
        <Router>
            <div className="box">
                <NavBar/>
                <Switch>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route path="/mentor">
                        <MentorDashboard/>
                    </Route>
                    <Route path="/student">
                        <StudentDashboard/>
                    </Route>
                    <Route path="/dashboard">
                        <PrototypeDashboard/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
};


const container = document.getElementById("app");
render(<App/>, container);