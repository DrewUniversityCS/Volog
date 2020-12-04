export const postNewStudent = (obj) => {
    fetch("api/students/", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: obj.state.first_name,
            last_name: obj.state.last_name,
            email: obj.state.email,
            student_id: obj.state.student_id,
            class_standing: obj.state.class_standing,
            DAS_mentor: obj.state.DAS_mentor
        })
    }).then(response => {
        return response.json()
    })
}