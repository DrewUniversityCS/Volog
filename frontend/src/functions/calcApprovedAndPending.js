export default function calcApprovedAndPending(hours) {
    let completeCount = 0;
    let pendingCount = 0;
    let arrLength = hours.length;
    let hour;
    let timeSubmission;
    if (hours && !!arrLength) {
        for (let i = 0; i < arrLength; i++) {
            hour = hours[i];
            timeSubmission = hour.number_of_hours + (60 / hour.number_of_minutes)
            if (hour.approved === true) {
                completeCount = completeCount + timeSubmission;
            } else {
                pendingCount = pendingCount + timeSubmission;
            }
        }
    }
    return [completeCount, pendingCount]
}