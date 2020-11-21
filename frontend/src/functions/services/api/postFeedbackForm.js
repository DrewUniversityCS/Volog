import Cookies from 'js-cookie';
import React from "react";
import {Redirect} from "react-router-dom";

export const postFeedbackForm = (obj) => {
    const csrftoken = Cookies.get('csrftoken');
    fetch("../api/feedback/post/", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        credentials: 'include',
        body: JSON.stringify({
            message: obj.state.message
        })
    }).then(r => {
        return <Redirect to="/app/"/>
    })
}