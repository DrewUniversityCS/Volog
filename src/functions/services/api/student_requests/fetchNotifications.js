export const getNotifications = (obj) => {
    fetch("/api/notifications/")
        .then(response => response.json())
        .then(notifications => {
            obj.setState({notifications})
        }).catch(err => console.log(err))
}
