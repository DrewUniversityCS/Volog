import React, { Component } from 'react'
import StudentCard from "../../display/cards/studentCard";


export default class MentorOpen extends Component {

    render() {
        const mentor = this.props.data;
        return (
            <div className="bg-green-200 w-full">
                {
                    mentor && (

                            <div className="overflow-auto" style={{ height: "67vh" }}>
                                <StudentCard mentor={mentor.student.user} id={mentor.student.id} user_role={'mentor'}/>
                            </div>
                    )
                }

            </div>
        )
    }
}
