import Cookies from 'js-cookie';

export const editHour = (obj, id) => {

    const csrftoken = Cookies.get('csrftoken');
    fetch(`/api/hours/${id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        credentials: 'include',
        body: JSON.stringify({
            date_of_activity: obj.state.date_of_activity,
            number_of_hours: obj.state.number_of_hours,
            number_of_minutes: obj.state.number_of_minutes,
            type_of_hour: obj.state.type_of_hour,
            learning_goal: obj.state.learning_goal,
            activity_description: obj.state.activity_description,
            activity_category: obj.state.activity_category
        })
    }).then(response => {
    obj.props.onChange()
        return response.json()
    })
}
