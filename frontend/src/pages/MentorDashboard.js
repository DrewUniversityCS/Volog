import React, {Component} from 'react';
// this will be changed,
class MentorDashboard extends Component {
     constructor(props) {
    super(props);

// it hits the api, if the user role is not valid, it will not get them to dashboard.
//ex, if student is the user, it wont let them access the admin page
    this.state = {isLoading: true};
  }
    componentDidMount() {
        let com = this
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               console.log();
               let role = JSON.parse(xhttp.responseText).role
                if (role == 0 || role ==2){
                    com.setState({
                      isLoading: false
                    });
                }
                else{
                   window.location='/app'
                }
            }
        };
        xhttp.open("GET", "/user/api/details/");
        xhttp.send();
    }

    render() {
        if (this.state.isLoading) return <h1>Loading...</h1>
        return (
            <div>
                Hello Mentor
            </div>
        );
    }
}

export default MentorDashboard;
