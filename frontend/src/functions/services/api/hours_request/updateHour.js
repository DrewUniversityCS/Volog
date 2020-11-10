import Cookies from "js-cookie";

export const updateHourStatus = (obj, id, ApiDATA) => {
    let url = `/api/hours/${id}/`;

    const csrftoken = Cookies.get('csrftoken');
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
            '_method': 'PATCH'
        },
        body: JSON.stringify(ApiDATA)
    }).then(response => response.json())
        .then(data => {

            if (ApiDATA.mentor_comment)
                obj.declineModalOpen(false, null);
            else if (ApiDATA.approval_status === 'PENDING') {
                if (obj.ReRequestModalOpen)
                    obj.ReRequestModalOpen(false, null)
                else
                    obj.pendingModalOpen(false, null)
            } else
                obj.approveModalOpen(false, null)
            obj.props.refreshHourData()
        }).catch(err => console.log(err))
};


export const deleteHour = (obj, hour_id) => {
    let url = `/api/hours/${hour_id}/`;
    const csrftoken = Cookies.get('csrftoken');
    fetch(url, {
        method: 'DELETE',
        headers: {
            'X-CSRFToken': csrftoken,
        },
    }).then(data => {
        obj.deleteModalOpen(false, null)
        obj.props.refreshHourData()
    }).catch(err => console.log(err))

}
