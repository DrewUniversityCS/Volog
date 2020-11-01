import React, {Component} from 'react';

class Referral extends Component {
    state = {
        html: ""
    };

    componentDidMount() {
        this.refreshIframe();

        window.addEventListener('message', this.handleIframeTask);
    }

    refreshIframe = ()=>{
        fetch("/superAdmin/referrals/", {method: 'GET'})
            .then(response => response.text())
            .then(res => {
                console.log(res);
                this.setState({html: res})
            })
    };

    handleIframeTask = (e) => {
       this.refreshIframe();
    };

    render() {
        return (
            <iframe width={"100%"} srcDoc={this.state.html}/>
        )

    }
}

export default Referral;
