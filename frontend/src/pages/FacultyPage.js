import React, {Component} from 'react';
import Student from './Faculty/student/studentsIndex';
import SideNav from './Faculty/sideNav';
import Redirect from "react-router-dom/es/Redirect";
import Referral from "./Faculty/referral";

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0
        };
    }

    openPage = (index) => {
        this.setState({page: index})
    };

    getPage = ()=> {
        switch (this.state.page) {
            case 0:
                return <Student/>
            case 1:
                return <Referral/>
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
        return (
            <div>
                <div className="w-screen flex">
                    <SideNav openPage={this.openPage} page={this.state.page}/>
                    {

                        this.getPage(this.state.page)
                    }
                </div>
            </div>
        );
    }
}

export default Admin;
