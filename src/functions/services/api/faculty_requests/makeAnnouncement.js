import Cookies from 'js-cookie';

export const postAnnouncement = (obj) => {

    const csrftoken = Cookies.get('csrftoken');
    fetch("../api/notifications/", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        credentials: 'include',
        body: JSON.stringify({
            title: obj.state.title,
        })
    }).then(response => {
        obj.notificationModalOpen(false)
        obj.setState({title: ''})
    }).catch(err=>{
        console.log(err)
    })
}