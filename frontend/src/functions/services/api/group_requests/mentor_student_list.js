export const getMentorList = (obj, searchQuery, type) => {
    let url;
    if(searchQuery)
        url = `/api/mentors/?search=${searchQuery}&${type}&full_list`;
    else
        url = `/api/mentors/?${type}&full_list`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            obj.setState({ Mentors: data })
        }).catch(err => console.log(err))
}


export const getStudentList = (obj, searchQuery, type) => {
    let url;
    if(searchQuery)
        url = `/api/students/?search=${searchQuery}&${type}&full_list`;
    else
        url = `/api/students/?${type}&full_list`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('student')
            console.log(data);
            obj.setState({ Students: data })
        }).catch(err => console.log(err, 'error yha se aariu hai'))
}
