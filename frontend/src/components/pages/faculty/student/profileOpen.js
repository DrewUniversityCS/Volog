import React, {Component} from 'react'
import StudentCard from "../../../display/cards/studentCard";

export default class ProfileOpen extends Component {

    render() {
        const student = this.props.data;
        return (
            student ? <StudentCard mentor={student.user} id={student.id} user_role={'faculty'} exportButton={true}/> : "No User DATA"
        )
    }
}
