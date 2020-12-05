import Cookies from "js-cookie";

export const deleteNotification = (obj, notification_id) => {
    let url = `/api/notifications/${notification_id}/?student_seen`;
    const csrftoken = Cookies.get('csrftoken');
    fetch(url, {
        method: 'DELETE',
        headers: {
            'X-CSRFToken': csrftoken,
        },
    }).then(data => {
    }).catch(err => console.log(err))
}
