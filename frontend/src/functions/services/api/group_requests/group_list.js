export const getGroupList = (obj, searchQuery, page) => {
    let url;
    if(searchQuery && page)
        url = `/api/groups/?search=${searchQuery}&page=${page}`;
    else if(searchQuery)
        url = `/api/groups/?search=${searchQuery}`;
    else
        url = `/api/groups/?page=${page}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            obj.setState({ Groups: data.results, selectedGroupData: data && data.results[0], countData: data.count });
        }).catch(err => console.log(err))
}
