export const getStudentList = (obj, searchQuery, page) => {
    let url;
    if (searchQuery)
        url = `/api/students/?search=${searchQuery}&page=${page}`;
    else
        url = `/api/students/?page=${page}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            obj.setState({students: data.results, selectedStudentData: data.results[0], countData: data.count});
        }).catch(err => console.log(err))
}
