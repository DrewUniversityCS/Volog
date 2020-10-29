export const getUserDataForStudent = (obj) => {
    fetch("/api/students/current/", {method: 'GET'})
        .then(response => response.json())
        .then(userData => obj.setState({userData}))
        .catch(err => console.log(err))
}
