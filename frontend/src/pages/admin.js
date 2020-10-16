import React, {Component} from 'react';

class Admin extends Component {
    constructor(props) {
    super(props);

    this.state = {isLoading: true};
  }
    componentDidMount() {
        let com = this
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               console.log();
               let role = JSON.parse(xhttp.responseText).role
                if (role === 0){
                    com.setState({
                      isLoading: false
                    });
                }
                else{
                   window.location='/'
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
                Hello Admin
            </div>
        );
    }
}

export default Admin;