export const getGroupStudentList = (obj, group_id) => {
    let url = `/api/groups/${group_id}/members/`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            obj.setState({ Students: data })
        }).catch(err => console.log(err,'Yha se'))
}

