import React, {Component} from 'react';
import VProgressBar from '../../../display/cards/progressBar';
import CreateGroups from './createGroups'

import EditGroup from './editGroup'
import {getGroupStudentList} from "../../../../functions/services/api/group_requests/groupStudentList";
import DeleteGroup from "./deleteGroup";


export default class ProfileOpen extends Component {
    state = {
        Students: [],
        showCreateGroupModal: false,
        showEditModal: false,
        showDeleteModal: false
    }


    componentDidMount() {
        this.StudentsList()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.GroupData != this.props.GroupData) {
            this.StudentsList()
        }
    }

    createEditModal = (v) => {
        this.setState({showEditModal: v})
    }
    createDeleteModal = (v) => {
        this.setState({showDeleteModal: v})
    }

    StudentsList = () => {
        if (this.props.GroupData.id)
            getGroupStudentList(this, this.props.GroupData.id);
    }

    render() {
        const GroupData = this.props.GroupData;
        const {Students, showEditModal, showCreateGroupModal, showDeleteModal} = this.state;
        return (
            <div>
                {
                    GroupData ?
                        <>
                            <div>
                                <div className="p-4">
                                    <div className="flex flex-col sm:flex-row justify-between"
                                         style={{flexFlow: "wrap"}}>
                                        <p className="text-3xl font-medium">
                                            <span className="mx-2">
                                                {GroupData.name}
                                            </span>
                                            |
                                            <span className="mx-2 text-2xl">
                                                {GroupData.mentor_detail.user.first_name + ' '}{GroupData.mentor_detail.user.last_name}
                                            </span>
                                        </p>

                                        <div className="my-auto ml-10">

                                            {(Students.length && GroupData) && <div><EditGroup
                                                selectedStudents={Students.map(student => student.student)}
                                                groupAdmin={GroupData.mentor_detail}
                                                createEditModal={this.createEditModal} show={showEditModal}
                                                groupData={GroupData} refreshGroupData={this.props.refreshGroupData}/>
                                                <DeleteGroup
                                                    createDeleteModal={this.createDeleteModal}
                                                    show={showDeleteModal}
                                                    groupId={GroupData.id}
                                                    refreshGroupData={this.props.refreshGroupData}
                                                />
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full pb-4 px-2">
                                     <VProgressBar completeCount={GroupData.approved_hour} pendingCount={GroupData.pending_hour}/>
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-white flex p-2 shadow-md w-11/12">
                                        <ul className="overflow-auto w-full" style={{height: "50vh"}}>
                                            {
                                                Students && Students.map((data, index) => (
                                                    <li className="border-b-2 flex justify-between p-2" key={index}>
                                                        <span>
                                                            {data.student.user.first_name} {data.student.user.last_name}, {data.student.user.email}
                                                        </span>
                                                        <span>
                                                            <div className="pb-4 px-2" style={{width: '20vw'}}>
                                                                {console.log(data.student)}
                                                                {console.log(data.student.approved_hours, data.student.pending_hours)}
                                                                <VProgressBar completeCount={data.student.approved_hour} pendingCount={data.student.pending_hour}/>
                                                            </div>
                                                        </span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </> : <p className="text-2xl text-red-400 p-10">No User Data</p>
                }
            </div>
        )
    }
}
