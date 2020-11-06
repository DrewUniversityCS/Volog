import React, { Component } from 'react';
import VProgressBar from '../../../display/ProgressBar';
import CreateGroups from './createGroups'
import EditGroup from './editGroup'
import {getGroupStudentList} from "../../../../functions/services/api/group_requests/group_student_list";


export default class ProfileOpen extends Component {
    state = {
        Students: [],
        showcreateGroupModal: false,
        showEditeModal: false,
    }


    componentDidMount() {
        this.StudentsList()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.GroupData != this.props.GroupData){
            this.StudentsList()
        }
    }

    createEditModal = (v) => {
        this.setState({ showEditeModal: v })
    }

    StudentsList = () => {
        if (this.props.GroupData.id)
            getGroupStudentList(this, this.props.GroupData.id);
    }

    render() {
        const GroupData = this.props.GroupData;
        const { Students, showEditeModal, showcreateGroupModal } = this.state;
        return (
            <div>
                {
                    GroupData ?
                        <>
                            <div>
                                <div className="p-4">
                                    <div className="flex flex-col sm:flex-row" style={{ flexFlow: "wrap" }}>
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

                                            {/*{(Students.length && GroupData) && <EditGroup selectedStudents={Students} groupAdmin={GroupData} createEditModal={this.createEditModal} show={showEditeModal} />}*/}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full pb-4 px-2">
                                    <VProgressBar completeCount={0} pendingCount={20}></VProgressBar>
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-green-300 flex p-2 shadow-md w-11/12">
                                        <ul className="overflow-auto w-full" style={{ height: "50vh" }}>
                                            {
                                                Students && Students.map((data, index) => (
                                                    <li className="border-b-2 flex justify-between p-2" key={index}><span>{data.student.user.email}</span><span>{data.student.user.first_name} {data.student.user.last_name}</span> </li>
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
