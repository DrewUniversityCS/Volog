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
    }).then(response => response.json())
        .then(data => {
            obj.props.createGroupModal(false)
            obj.props.refreshGroupData()
        }).catch(err => console.log(err))

}

export const editGroup = (obj, data, group_id) => {
    let url = `/api/groups/${group_id}/`;
    const csrftoken = Cookies.get('csrftoken');
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
            '_method': 'PATCH'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
        .then(data => {
            obj.props.createEditModal(false)
            obj.props.refreshGroupData()
        }).catch(err => console.log(err))

}
export const deleteGroup = (obj, group_id) => {
    let url = `/api/groups/${group_id}/`;
    const csrftoken = Cookies.get('csrftoken');
    fetch(url, {
        method: 'DELETE',
        headers: {
            'X-CSRFToken': csrftoken,
        },
    }).then(data => {
        obj.props.createDeleteModal(false)
        obj.props.refreshGroupData()
    }).catch(err => console.log(err))

}
