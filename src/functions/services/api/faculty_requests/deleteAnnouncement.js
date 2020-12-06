import Cookies from "js-cookie";

export const deleteAnnouncement = (obj, announcement_id) => {
    let url = `/api/notifications/${announcement_id}/`;
    const csrftoken = Cookies.get('csrftoken');
    fetch(url, {
        method: 'DELETE',
        headers: {
            'X-CSRFToken': csrftoken,
        },
    }).then(data => {
    }).catch(err => console.log(err))
}
