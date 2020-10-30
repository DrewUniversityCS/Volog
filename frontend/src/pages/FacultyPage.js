import React, {Component} from 'react';
import Student from './Faculty/student/studentsIndex';
import SideNav from './Faculty/sideNav';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            page: 0
        };
    }

    componentDidMount() {
        let com = this
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log();
                let role = JSON.parse(xhttp.responseText).role
                if (role === 0) {
                    com.setState({
                        isLoading: false,
                        page: 0
                    });
                } else {
                    if (role === 1) {
                        window.location = '/app/student'
                    }
                    else if(role === 2){
                        window.location = '/app/mentor'
                    }
                    else{
                        window.location = '/app/'
                    }                }
            }
        };
        xhttp.open("GET", "/api/details/");
        xhttp.send();
    }

    openPage = (index) => {
        console.log(index);
        this.setState({page: index})
    };

    render() {

        if (this.state.isLoading) return <h1>Loading...</h1>
        return (
            <div>
                <div className="w-screen flex">
                    <SideNav openPage={this.openPage} page={this.state.page}/>
                    {
                        this.state.page === 0 ? <Student/> : "no page"
                    }
                </div>
            </div>
        );
    }
}

export default Admin;
