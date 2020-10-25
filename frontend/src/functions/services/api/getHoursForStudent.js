export const getHoursForStudent = (obj) => {
    fetch("api/students/details/")
        .then(response => response.json())
        .then(items => {
            obj.setState({items})
        }).catch(err => console.log(err))
}
