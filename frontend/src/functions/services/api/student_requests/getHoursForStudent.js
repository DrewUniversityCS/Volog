export const getHoursForStudent = (obj) => {
    fetch("/api/students/current/hours/", {method: 'GET'})
        .then(response => response.json())
        .then(hours => {
            let results = hours.results;
            obj.setState({hours: results});
        })
        .catch(err => console.log(err))
}
