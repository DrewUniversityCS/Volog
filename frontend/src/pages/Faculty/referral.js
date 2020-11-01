import React, {Component} from 'react';

class Referral extends Component {
    state = {
        html: "",
        isLoading: true
    };

    componentDidMount() {
        this.refreshIframe();

        window.addEventListener('message', this.handleIframeTask);
    }

    refreshIframe = () => {
        fetch("/superAdmin/referrals/", {method: 'GET'})
            .then(response => response.text())
            .then(res => {
                this.setState({html: res, isLoading: false})
            })
    };

    handleIframeTask = (e) => {
        this.setState({
            html: "",
            isLoading: true
        }, () => {
            this.refreshIframe();
        })

    };

    render() {
        if (this.state.isLoading) <h1>Loading....</h1>
        return (
            <iframe width={"100%"} srcDoc={this.state.html}/>
        )

    }
}

export default Referral;
