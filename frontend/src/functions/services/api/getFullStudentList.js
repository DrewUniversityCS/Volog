export const getFullStudentList = (obj) => {
    fetch("api/students/")
        .then(response => response.json())
        .then(items => {obj.setState({items})})
        .catch(err => console.log(err))
}
