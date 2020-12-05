import React, {Component} from 'react'
import {Modal} from "react-bootstrap";
import Message from "@material-ui/icons/VolumeUp";
import {postAnnouncement} from '../../../../functions/services/api/faculty_requests/makeAnnouncement'
import FacultyNotification from '../../../modals/FacultyNotifications'

export default class StudentList extends Component {
    state={
        title: '',
        notificationShow: false
    }

    notificationModalOpen = (val) => {
        this.setState({notificationShow: val})
    };

    handleNotificationPost = () => {
        postAnnouncement(this)
    };

    handleCommentUpdate = (event) => {
        let val = event.target.value;
        this.setState({title: val})
    };


    render() {
        const {studentData: student, countData, page} = this.props;
        const {notificationShow} = this.state;
        console.log(countData)
        const maxCount = Math.ceil(countData / 10);
        console.log('max count: ' + maxCount);
        return (
            <div className="relative h-full">
                <div>

                    <div className="flex justify-between p-3 w-full">
                        <input type="search" placeholder="search" onChange={this.props.searchStudent}
                               className="border-2 border-green-400 p-1 w-1/2 w-10/12"/>
                        <a href="/api/report/hours">
                            <button
                                className="bg-green-700 font-bold hover:bg-green-800 hover:shadow-lg inline-flex items-center px-4 py-3 right-0 rounded text-sm text-white text-center" title={'Download student hour report'}>
                                <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </a>
                        <a onClick={()=>{this.notificationModalOpen(true)}}>
                            <button
                                className="bg-green-700 font-bold hover:bg-green-800 hover:shadow-lg inline-flex items-center px-3 py-3 h-12 right-0 rounded text-sm text-white text-center" title={'Make an announcement'}>
                                    <Message  />
                            </button>
                        </a>
                        <FacultyNotification />
                    </div>
                    <div>
                        {
                            (student && student.length) ?
                                <ul>
                                    {
                                        student.map((data, index) => {
                                            return <li key={index}
                                                       className={`flex justify-between px-6 py-2 hover:bg-green-200 ${index === this.props.studentNo && 'bg-green-300 hover:bg-green-300'}`}
                                                       onClick={() => {
                                                           this.props.selectedStudent(index)
                                                       }}>
                                                <span>{data.user.first_name + " " + data.user.last_name}</span><span>{data.student_id}</span>
                                            </li>
                                        })
                                    }

                                </ul> : "Users not found"
                        }

                    </div>


                </div>
                <div
                    className="absolute w-full  border-gray-200 border-t bottom-0 flex justify-center justify-between px-4 py-3 sm:px-6">
                    <div className="flex-1 flex justify-center ">
                        <a href="#" onClick={() => {
                            this.props.pagination(parseInt(page > 1 ? page - 1 : 1))
                        }}
                           className="relative inline-flex items-center px-4 py-2  border border-green-400 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                            Previous
                        </a>
                        <span className="h-10 leading-10 text-center w-10">{page}</span>
                        <a href="#" onClick={() => {
                            this.props.pagination(parseInt(page >= 1 && page < maxCount ? page + 1 : 1))
                        }}
                           className="ml-3 relative inline-flex items-center px-4 py-2 border border-green-400 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                            Next
                        </a>
                    </div>
                     <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={notificationShow} onHide={() => {
                    this.notificationModalOpen(true)
                }} animation={false}>
                    <div>
                        <div className={'p-4 pd-md-0 bg-grey-800 text-xl text-center font-medium'}>Announcement:</div>
                        <div className={'flex px-3 w-full'}>
                            <textarea className={'border-2 h-20 mx-auto w-full'}
                                      onChange={this.handleCommentUpdate}>
                            </textarea>
                        </div>
                        <div className={'p-4 flex justify-around'}>
                            <button
                                onClick={() => {
                                    this.handleNotificationPost()
                                }}
                                className={'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'}
                            >Post
                            </button>
                            <button
                                onClick={() => {
                                    this.notificationModalOpen(false)
                                }}
                                className={'bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded '}
                            >Close
                            </button>
                        </div>
                    </div>
                </Modal>


                </div>
            </div>
        )
    }
}
