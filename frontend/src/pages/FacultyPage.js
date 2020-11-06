import React, { Component } from 'react';
import Student from '../components/Faculty/student/studentsIndex';
import SideNav from '../components/Faculty/sideNav';
import { Redirect } from "react-router-dom";
import Referral from "../components/Faculty/referral";
import GroupsDashboard from "../components/Faculty/groups/groupIndex";
import Mentor from "../components/Faculty/mentor/mentorIndex";
import Stats from "../components/Faculty/stats/Stats";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        };
    }

    openPage = (index) => {
        this.setState({ page: index })
    };

    getPage = () => {
        switch (this.state.page) {
            case 0:
                return <Student />
            case 1:
                return <Mentor />
            case 2:
                return <GroupsDashboard />
            case 3:
                return <Stats/>
            case 4:
                return <Referral />
            default:
                return "No Page"
        }
    }

    render() {
        let role = this.props.userData.role;
        if (role === 1) {
            return <Redirect to="/app/student" push />
        } else if (role === 2) {
            return <Redirect to="/app/mentor" push />
        }
        else if (role === 3) {
            return <Redirect to="/app/groups" push />
        }
        else if (role === 4) {
            return <Redirect to="/app/stats" push />
        }
        return (
            <div>
                <div className="w-screen flex">
                    <SideNav openPage={this.openPage} page={this.state.page} />
                    {

                        this.getPage(this.state.page)
                    }
                </div>
            </div>
        );
    }
}

export default Admin;
