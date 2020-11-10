export const getHoursList = (obj, status, id, page, type) => {
    let url = `/api/hours/?status=${status}&type=${type}&id=${id}&page=${page}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            obj.setState({data});
        }).catch(err => console.log(err))
}
