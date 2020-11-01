import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/index.css';
import MentorDashboard from "./pages/MentorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import NavBar from "./components/elements/NavBar";
import Admin from "./pages/FacultyPage";
import ReactDOM from 'react-dom';
import {getSessionUser} from "./functions/services/api/getSessionUser";

class App extends React.Component {
    state = {
        userData: {
            first_name: '',
            last_name: '',
            email: '',
            role: 3,
            is_profile_complete: '',
            groups: []
        },
        isLoading: true
    };

    componentDidMount() {
        getSessionUser(this);
    }

    render() {
        return (
            <Router>
                {this.state.isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div className="box">
                        <NavBar userData={this.state.userData}/>
                        <Switch>
                            <Route path="/app/" exact>
                                <Admin userData={this.state.userData}/>
                            </Route>
                            <Route path="/app/mentor/">
                                <MentorDashboard userData={this.state.userData}/>
                            </Route>
                            <Route path="/app/student/">
                                <StudentDashboard userData={this.state.userData}/>
                            </Route>
                        </Switch>
                    </div>
                )}
            </Router>
        )
    }

};

export default App;

const container = document.getElementById("app");
ReactDOM.render(<App/>, container);
