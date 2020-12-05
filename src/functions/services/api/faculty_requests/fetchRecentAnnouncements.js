export const getAnnouncements = (obj) => {
    fetch("/api/notifications/?faculty")
        .then(response => response.json())
        .then(notifications => {
            obj.setState({notifications})
        }).catch(err => console.log(err))
}
