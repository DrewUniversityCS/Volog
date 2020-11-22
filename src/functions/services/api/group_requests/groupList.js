export const getGroupList = (obj, searchQuery, page) => {
    let url;
    if (searchQuery && page)
        url = `/api/groups/?search=${searchQuery}&page=${page}`;
    else if (searchQuery)
        url = `/api/groups/?search=${searchQuery}`;
    else
        url = `/api/groups/?page=${page}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let ind = obj.state.selectedGroupData ?
                data.results.map(val => val.id).indexOf(obj.state.selectedGroupData.id) : 0;
            obj.setState({Groups: data.results, selectedGroupData: data && data.results[ind], countData: data.count});
        }).catch(err => console.log(err))
}
