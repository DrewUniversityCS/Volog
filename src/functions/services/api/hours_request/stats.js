export const getHoursStats = (obj) => {
    let url = `/api/hours/stats/`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            obj.setState({chartData:data});
        }).catch(err => console.log(err))
}
