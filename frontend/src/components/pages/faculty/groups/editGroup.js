import React, { Component } from 'react'
import { Modal } from "react-bootstrap";

export default class CreateGroups extends Component {

    state = {
        Students: [],
        selectedMentor: null,
        studentLists: [],
        MentorsLists: []

    }
    componentDidMount() {
        this.fetchMentorsList()
        this.StudentsList()

        const { show, selectedStudents, groupAdmin } = this.props;
        console.log('selectedStudents', selectedStudents)
        this.setState({ studentLists: selectedStudents, Students: selectedStudents, selectedMentor: groupAdmin })
    }

    fetchMentorsList = () => {
        const apiData = [
            { first_name: "Joope", last_name: "khaskjkas", id: '6587', email: 'kaskn@g.com' },
            { first_name: "Joubuhe", last_name: "khaskjkas", id: '23', email: 'iui@g.com' },
            { first_name: "Jojije", last_name: "khaskjkas", id: '98', email: 'opop@g.com' },
            { first_name: "Jqerqoe", last_name: "khaskjkas", id: '12', email: 'ijoko@g.com' },
        ];
        this.setState({ MentorsLists: apiData })
    };

    StudentsList = () => {
        const apiData = [
            { first_name: "ajksnlk", last_name: "khaskjkas", id: '6587', email: 'kaskn@g.com' },
            { first_name: "Joaks;kp;e", last_name: "khaskjkas", id: '23', email: 'iui@g.com' },
            { first_name: "Jyuyuoe", last_name: "khaskjkas", id: '98', email: 'opop@g.com' },
            { first_name: "Jmnnnoe", last_name: "khaskjkas", id: '12', email: 'ijoko@g.com' },
        ];
        this.setState({ Students: apiData })
    };

    handleselectedMentor = (value) => {
        this.setState({ selectedMentor: value })
    };

    handleStudentList = (event, value) => {
        const verify = event.currentTarget.checked;
        let { studentLists } = this.state;
        if (verify) {
            studentLists.push(value);
            this.setState({ studentLists })
        }
        else {
            studentLists = studentLists.filter((data) => (
                data != value
            ))
            this.setState({ studentLists })
        }
    }

    submitForm = () => {
        // selectedMentor, studentLists
    }

    AllfetchMentorsList = (which) => {
        if (which === 'student') {
            // this.setState({ Students: apiData })
        }
        else {
            // this.setState({ MentorsLists: apiData })
        }

    }
    selectWithnoGroupList = (which) => {
        if (which === 'student') {
            // this.setState({ Students: apiData })
        }
        else {
            // this.setState({ MentorsLists: apiData })

        }

    }

    AllStudentsList = () => {
        // api call
        // this.setState({ Mentors: apiData })
    }

    render() {
        const { show } = this.props;
        const { Students, groupAdmin, MentorsLists, studentLists, selectedMentor } = this.state;
        return (
            <>
                <button className="mx-4 w-6" onClick={() => { this.props.createEditModal(true) }}><img src="https://icon-library.com/images/edit-icon/edit-icon-28.jpg" alt="add" onClick={() => { }} /></button>
                <Modal
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={show} onHide={() => { this.props.createEditModal(true) }} animation={false}>
                    <div className="p-8">
                        <p className="text-center text-3xl"> Edit Group</p>
                        <span className="absolute cursor-pointer font-medium p-6 right-0 text-2xl top-0" onClick={() => { this.props.createEditModal(false) }}> X </span>
                        <div>

                            <div className="flex justify-around border">
                                <div>
                                    <p className="text-center text text-lg">Mentor</p>
                                    <select className="my-1 w-full">
                                        <option onClick={() => { this.selectWithnoGroupList('mentor') }}>Mentor with no group</option>
                                        <option onClick={() => { this.AllfetchMentorsList('mentor') }}>View All</option>
                                    </select>
                                    <input type="search" placeholder="search" />
                                    <ul className="overflow-auto" style={{ maxHeight: "130px" }}>
                                        {
                                            MentorsLists && MentorsLists.map((data, index) =>
                                                (
                                                    <li className="flex" key={index}>
                                                        <input type="radio" name="mentor" className="mx-1 my-auto" onClick={() => { this.handleselectedMentor(data) }} /><label className="my-auto">{data.email}</label>
                                                    </li>
                                                ))
                                        }
                                    </ul>
                                </div>

                                <div>
                                    <p className="text-center text-lg">Student</p>
                                    <select className="my-1 w-full">
                                        <option onClick={() => { this.selectWithnoGroupList('student') }}>Student with no group</option>
                                        <option onClick={() => { this.AllfetchMentorsList('student') }}>View All</option>
                                    </select>
                                    <input type="search" placeholder="search" />
                                    <ul className="overflow-auto" style={{ maxHeight: "130px" }}>
                                        {
                                            Students && Students.map((data, index) =>
                                                (
                                                    <li className="flex" key={index}>
                                                        <input type="checkbox" className="mx-1 my-auto" onClick={(event) => { this.handleStudentList(event, data) }} /><label className="my-auto">{data.email}</label>
                                                    </li>
                                                ))
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className="w-full my-2 border">
                                <p className="text-center text-xl text-gray-700">Selected Students</p>
                                <div className="bg-green-200 p-2 flex overflow-auto" style={{ flexFlow: "wrap", maxHeight: "190px" }}>
                                    {
                                        studentLists && studentLists.map((data, index) => (
                                            <p className="bg-gray-200 p-1 rounded mx-1" key={index} style={{ width: "fit-content" }}>{data.first_name}{console.log('data', data)}</p>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="w-full my-1">
                                <p className="text-center text-xl text-gray-700">Selected Mentor</p>
                                {selectedMentor && <p className="px-2 text-center text-xl">{selectedMentor.first_name + ' ' + selectedMentor.last_name}</p>}
                            </div>
                            <div className="flex justify-center">
                                <button className="py-2 px-4 w-1/2 rounded bg-green-400 hover:bg-green-700 hover:text-white" onClick={() => this.submitForm}>Save</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}
