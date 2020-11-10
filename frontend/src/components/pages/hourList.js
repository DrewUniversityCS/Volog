import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import {deleteHour, updateHourStatus} from "../../functions/services/api/hours_request/update_hour";

class HourList extends Component {
    state = {
        page: 0,
        approveShow: false,
        declineShow: false,
        deleteShow: false,
        pendingShow: false,
        targetID: null,
        decTargetID: null,
        delTargetID: null,
        penTargetID: null,
        mentor_comment: ""
    };

    approveModalOpen = (val, targetID) => {
        this.setState({approveShow: val, targetID})
    };

    declineModalOpen = (val, decTargetID) => {
        this.setState({declineShow: val, decTargetID})
    };

    deleteModalOpen = (val, delTargetID) => {
        this.setState({deleteShow: val, delTargetID})
    };

    pendingModalOpen = (val, penTargetID) => {
        this.setState({pendingShow: val, penTargetID})
    };

    handleApprove = () => {
        updateHourStatus(this, this.state.targetID, {approval_status: "APPROVED"})
    };

    handleDecline = () => {
        updateHourStatus(this, this.state.decTargetID, {
            approval_status: "DECLINED",
            mentor_comment: this.state.mentor_comment
        })
    };

    handleDelete = () => {
        deleteHour(this, this.state.delTargetID)
    };

    handlePending = () => {
        updateHourStatus(this, this.state.penTargetID, {approval_status: "PENDING"})
    };

    handleMentorCommentUpdate = (event) => {
        let val = event.target.value;
        console.log(val)
        this.setState({mentor_comment: val})
    };


    render() {
        const {data, status, refreshHourData, count, page, user_role} = this.props;
        const {approveShow, declineShow, deleteShow, pendingShow} = this.state;
        const maxCount = Math.ceil(count / 10);
        return (
            <div className={'w-full p-2 bg-white'}>
                <h1 className={'text-center text-xl font-medium p-0 m-0'}>{status} HOURS</h1>
                <div>
                    <div className={'w-full px-2 py-3 overflow-auto'}
                         style={{height: user_role === 'faculty' ? '59vh' : '38vh'}}>
                        {data.length ? data.map(hour => <div className={'flex border-2 p-1'}>
                            <div className={'w-full text-sm'}>
                                <p className={'my-0'}>
                                    Learning Goal: {hour.learning_goal}
                                </p>
                                <p className={'my-0'}>
                                    Date of Activity: {hour.date_of_activity}
                                </p>
                                <p className={'my-0'}>
                                    Activity Catagory: {hour.activity_category}
                                </p>
                                <p className={'my-0'}>
                                    Activity Description: {hour.activity_description}
                                </p>
                                <p className={'my-0'}>
                                    <span>Type of Hours: {hour.type_of_hour}</span>
                                    <span
                                        className={'ml-4'}>Total Hours:{hour.number_of_hours} Hours {hour.number_of_minutes} Minutes</span>
                                </p>
                            </div>
                            <div className={'flex py-10'}>
                                {status === 'PENDING' ? <button
                                    className={"mx-1 px-3 py-2 bg-green-600 text-white rounded hover:shadow-md"}
                                    onClick={() => {
                                        this.approveModalOpen(true, hour.id)
                                    }}
                                >Approve
                                </button> : ''}
                                {status !== 'PENDING' && user_role === 'faculty' ? <button
                                    className={"mx-1 px-3 py-2 bg-green-600 text-white rounded hover:shadow-md"}
                                    onClick={() => {
                                        this.pendingModalOpen(true, hour.id)
                                    }}
                                >Mark Pending
                                </button> : ''}
                                {(status === 'PENDING' && user_role === 'mentor') || user_role === 'faculty' && status !== 'DECLINED' ?
                                    <button
                                        className={"mx-1 px-3 py-2 bg-red-600 text-white rounded hover:shadow-md"}
                                        onClick={() => {
                                            this.declineModalOpen(true, hour.id)
                                        }}
                                    >Decline
                                    </button> : ''}
                                {user_role === 'faculty' ? <button
                                    className={"mx-1 px-3 py-2 bg-gray-600 text-white rounded hover:shadow-md"}
                                    onClick={() => {
                                        this.deleteModalOpen(true, hour.id)
                                    }}
                                >Delete
                                </button> : ''}
                            </div>
                        </div>) : <p className={'text-center font-medium p-3'}>No Data to Show</p>
                        }
                    </div>
                </div>
                <div className={'p-1 m-0'}>
                    <div className={'flex justify-between'}>
                        <button onClick={() => {
                            this.props.pagination(parseInt(page > 1 ? page - 1 : 1))
                        }}>❮
                        </button>
                        <span className={'p-1 m-0 my-auto'}>{page}</span>
                        <button onClick={() => {
                            this.props.pagination(parseInt(page >= 1 && page < maxCount ? page + 1 : 1))
                        }}>❯
                        </button>
                    </div>
                </div>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={approveShow} onHide={() => {
                    this.approveModalOpen(true)
                }} animation={false}>
                    <div>
                        <div className={'p-4 pd-md-0 bg-grey-800 text-xl text-center font-medium'}>Are You Sure?</div>
                        <div className={'p-4 flex justify-around'}>
                            <button
                                onClick={() => {
                                    this.handleApprove()
                                }}
                                className={'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'}
                            >Yes
                            </button>

                            <button
                                onClick={() => {
                                    this.approveModalOpen(false, null)
                                }}
                                className={'bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded '}
                            >No
                            </button>
                        </div>
                    </div>

                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={declineShow} onHide={() => {
                    this.declineModalOpen(true)
                }} animation={false}>
                    <div>
                        <div className={'p-4 pd-md-0 bg-grey-800 text-xl text-center font-medium'}>Reason:</div>
                        <div className={'flex px-3 w-full'}>
                            <textarea className={'border-2 h-20 mx-auto w-full'}
                                      onChange={this.handleMentorCommentUpdate}>
                            </textarea>
                        </div>
                        <div className={'p-4 flex justify-around'}>
                            <button
                                onClick={() => {
                                    this.handleDecline()
                                }}
                                className={'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'}
                            >Yes
                            </button>

                            <button
                                onClick={() => {
                                    this.declineModalOpen(false, null)
                                }}
                                className={'bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded '}
                            >No
                            </button>
                        </div>
                    </div>

                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={deleteShow} onHide={() => {
                    this.deleteModalOpen(true)
                }} animation={false}>
                    <div>
                        <div className={'p-4 pd-md-0 bg-grey-800 text-xl text-center font-medium'}>Are You Sure to
                            Delete?
                        </div>
                        <div className={'p-4 flex justify-around'}>
                            <button
                                onClick={() => {
                                    this.handleDelete()
                                }}
                                className={'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'}
                            >Yes
                            </button>

                            <button
                                onClick={() => {
                                    this.deleteModalOpen(false, null)
                                }}
                                className={'bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded '}
                            >No
                            </button>
                        </div>
                    </div>

                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={pendingShow} onHide={() => {
                    this.pendingModalOpen(true)
                }} animation={false}>
                    <div>
                        <div className={'p-4 pd-md-0 bg-grey-800 text-xl text-center font-medium'}>Are You Sure to
                            Delete?
                        </div>
                        <div className={'p-4 flex justify-around'}>
                            <button
                                onClick={() => {
                                    this.handlePending()
                                }}
                                className={'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'}
                            >Yes
                            </button>

                            <button
                                onClick={() => {
                                    this.pendingModalOpen(false, null)
                                }}
                                className={'bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded '}
                            >No
                            </button>
                        </div>
                    </div>

                </Modal>
            </div>
        );
    }
}

export default HourList;
