import calcApprovedAndPending from "../../../calcApprovedAndPending";

export const getHoursForStudent = (obj) => {
    fetch("/api/students/current/hours/", {method: 'GET'})
        .then(response => response.json())
        .then(hours => {
            let results = hours.results;
            console.log('results', results)
            let hourNums = calcApprovedAndPending(results);
            console.log('hournums', hourNums)
            obj.setState({hours: results, approved_hours: hourNums[0], pending_hours: hourNums[1]});
        })
        .catch(err => console.log(err))
}
