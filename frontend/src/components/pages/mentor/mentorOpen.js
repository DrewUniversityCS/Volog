import React, { Component } from 'react'
import StudentCard from "../../display/cards/studentCard";


export default class MentorOpen extends Component {

    render() {
        const mentor = this.props.data;
        return (
            <div className="bg-green-200 w-full">
                {
                    mentor && (

                            <div className="overflow-auto" style={{ height: "50vh" }}>
                                <StudentCard mentor={mentor} />
                            </div>
                    )
                }

            </div>
        )
    }
}
