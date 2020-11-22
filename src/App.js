import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './static/css/index.css';
import '@fortawesome/fontawesome-free/css/all.css';


import MentorDashboard from "./pages/MentorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import NavBar from "./components/common/navBar";
import Admin from "./pages/FacultyDashboard";

import {getSessionUser} from "./functions/services/api/getSessionUser";
import Footer from "./components/common/footer";
import {BugReport} from "./pages/BugReport";
import {FAQ} from "./pages/FAQ";
import {ContactUs} from "./pages/ContactUs";


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
                            <Route path="/app/bug_report/">
                                <BugReport userData={this.state.userData}/>
                            </Route>
                            <Route path="/app/FAQ/">
                                <FAQ userData={this.state.userData}/>
                            </Route>
                            <Route path="/app/contact_us/">
                                <ContactUs userData={this.state.userData}/>
                            </Route>
                        </Switch>
                        <Footer/>
                    </div>
                )}
            </Router>
        )
    }

}

export default App;

const container = document.getElementById("app");
ReactDOM.render(<App/>, container);
