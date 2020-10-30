export const getSessionUser = (obj) => {
    fetch("/api/users/current", {method: 'GET'})
        .then(response => response.json())
        .then(userData => obj.setState({userData}))
        .catch(err => console.log(err))
}
