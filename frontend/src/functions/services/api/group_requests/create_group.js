import Cookies from "js-cookie";

export const createGroup = (obj, data) => {
    let url = `/api/groups/`;
    const csrftoken = Cookies.get('csrftoken');
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             'X-CSRFToken': csrftoken
        },
        body: JSON.stringify(data)
    }) .then(response => response.json())
        .then(data => {
            obj.props.createGroupModal(false)
        }).catch(err => console.log(err))

}
