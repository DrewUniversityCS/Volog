import React from 'react';
import {render} from "react-dom";
import NavBar from "./components/elements/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/index.css';
import PrototypeDashboard from "./pages/PrototypeDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import StudentDashboard from "./pages/StudentDashboard";

import Admin from "./pages/admin";


const App = () => {

    return (
        <Router>
            <div className="box">
                <NavBar/>
                <Switch>
                    <Route path="/app/admin/">
                        <Admin/>
                    </Route>
                    <Route path="/app/mentor/">
                        <MentorDashboard/>
                    </Route>
                    <Route path="/app/student/">
                        <StudentDashboard/>
                    </Route>
                    <Route path="/app/dashboard">
                        <PrototypeDashboard/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
};

export default App;
//const container = document.getElementById("app");
//render(<App/>, container);