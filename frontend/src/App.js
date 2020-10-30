import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/index.css';
import MentorDashboard from "./pages/MentorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import NavBar from "./components/elements/NavBar";
import Admin from "./pages/FacultyPage";
import ReactDOM from 'react-dom';

const App = () => {

    return (
        <Router>
            <div className="box">
                <NavBar/>
                <Switch>
                    <Route path="/app/">
                        <Admin/>
                    </Route>
                    <Route path="/app/mentor/">
                        <MentorDashboard/>
                    </Route>
                    <Route path="/app/student/">
                        <StudentDashboard/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
};

export default App;

const container = document.getElementById("app");
ReactDOM.render(<App/>, container);
