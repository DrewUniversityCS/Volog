export const getHoursForStudent = (obj) => {
    fetch("/api/students/current/hours/", {method: 'GET'})
        .then(response => response.json())
        .then(hours => obj.setState({hours}))
        .catch(err => console.log(err))
}
