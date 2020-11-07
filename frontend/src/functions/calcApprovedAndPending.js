export default function calcApprovedAndPending(hours) {
    let completeCount = 0;
    let pendingCount = 0;
    let arrLength = hours.length;
    let hour;
    let timeSubmission;
    if (hours && !!arrLength) {
        for (let i = 0; i < arrLength; i++) {
            hour = hours[i];
            if(hour.number_of_minutes !== 0){
                timeSubmission = hour.number_of_hours + (hour.number_of_minutes / 60)
            }else{
                timeSubmission = hour.number_of_hours
            }

            if (hour.approved === true) {
                completeCount = completeCount + timeSubmission;
            } else {
                pendingCount = pendingCount + timeSubmission;
            }
        }
    }
    return [completeCount, pendingCount]
}