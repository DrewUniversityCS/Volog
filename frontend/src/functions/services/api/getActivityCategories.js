export const getActivityCategories = (obj) => {
    fetch("/api/activity_categories/", {method: 'GET'})
        .then(response => response.json())
        .then(data => obj.setState({activity_categories: data.results}))
        .catch(err => console.log(err))
}
