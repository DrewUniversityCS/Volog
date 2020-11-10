import React, {Component} from 'react'
import StudentCard from "../../../display/cards/studentCard";

export default class ProfileOpen extends Component {

    render() {
        const mentor = this.props.data;
        console.log(mentor);
        return (
            <div>
                {
                    mentor ?
                        <StudentCard mentor={mentor.user} id={mentor.id} user_role={'faculty'}
                                     type={'mentor'}/> : 'No user data Found'
                }
            </div>
        )
    }
}
