import React, { Component } from 'react';
import VProgressBar from '../../elements/ProgressBar';
import CreateGroups from './createGroups'
import EditGroup from './editGroup'


export default class ProfileOpen extends Component {
    state = {
        Students: [],
        showcreateGroupModal: false,
        showEditeModal: false,
    }


    componentDidMount() {
        this.StudentsList()
    }

    createGroupModal = (v) => {
        this.setState({ showcreateGroupModal: v })
    }
    createEditModal = (v) => {
        this.setState({ showEditeModal: v })
    }

    StudentsList = () => {
        const apiData = [
            { first_name: "Mahmoud", last_name: "mina", id: '6587', email: 'kaskn@g.com' },
            { first_name: "David;kp;e", last_name: "Davidd", id: '23', email: 'iui@g.com' },
            { first_name: "Perr", last_name: "TEst", id: '98', email: 'opop@g.com' },
            { first_name: "Deja", last_name: "khaskjkas", id: '12', email: 'ijoko@g.com' },

        ]

        this.setState({ Students: apiData })
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
                                                {GroupData.groupName}
                                            </span>
                                            |
                                            <span className="mx-2 text-2xl">
                                                {GroupData.first_name + ' '}{GroupData.last_name}
                                            </span>
                                        </p>

                                        <div className="my-auto ml-10">
                                            <CreateGroups createGroupModal={this.createGroupModal} show={showcreateGroupModal} />
                                            {(Students.length && GroupData) && <EditGroup selectedStudents={Students} groupAdmin={GroupData} createEditModal={this.createEditModal} show={showEditeModal} />}
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
                                                    <li className="border-b-2 flex justify-between p-2" key={index}><span>{data.email}</span><span>{data.name}</span> </li>
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
