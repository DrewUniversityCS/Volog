import React, { Component } from 'react'
import { Modal } from "react-bootstrap";

export default class CreateGroups extends Component {

    state = {
        Mentors: [],
        Students: [],
        selectedMentor: null,
        studentLists: [],

    }
    componentDidMount() {
        this.fetchMentorsList()
        this.StudentsList()
    }

    fetchMentorsList = () => {
        const apiData = [
            { first_name: "Joope", last_name: "jsbdfje", id: '6587', email: 'kaskn@g.com' },
            { first_name: "ejhdf", last_name: "jehbdihe", id: '23', email: 'iui@g.com' },
            { first_name: "efe", last_name: "jehdiieh", id: '98', email: 'opop@g.com' },
            { first_name: "Jqerqoe", last_name: "jheudfehfijh", id: '12', email: 'ijoko@g.com' },
        ]
        this.setState({ Mentors: apiData })

    }

    StudentsList = () => {
        const apiData = [
            { first_name: "erfe", last_name: "rfr", id: '6587', email: 'kaskn@g.com' },
            { first_name: "rrf;kp;e", last_name: "rfrfr", id: '23', email: 'iui@g.com' },
            { first_name: "rff", last_name: "rf", id: '98', email: 'opop@g.com' },
            { first_name: "rf", last_name: "rf", id: '12', email: 'ijoko@g.com' },
        ]
        this.setState({ Students: apiData })
    }

    handleselectedMentor = (value) => {
        this.setState({ selectedMentor: value })
    }

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

    AllfetchMentorsList = () => {
        // api call
        // this.setState({ Mentors: apiData })

    }

    AllStudentsList = () => {
        // api call
        // this.setState({ Mentors: apiData })

    }


    render() {
        const { show } = this.props;
        const { Students, Mentors, selectedMentor, studentLists } = this.state;
        return (
            <>
                <button onClick={() => { this.props.createGroupModal(true) }}><img src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-1/512/add-icon.png" className="h-6" alt="add" onClick={() => { }} /></button>
                <Modal
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={show} onHide={() => { this.props.createGroupModal(true) }} animation={false}>
                    <div className="p-8">
                        <p className="text-center text-3xl"> Create Group</p>
                        <span className="absolute cursor-pointer font-medium p-6 right-0 text-2xl top-0" onClick={() => { this.props.createGroupModal(false) }}> X </span>
                        <div>
                            <div className="flex justify-around">
                                <div>
                                    <p className="text-center text text-lg">Mentor</p>
                                    <select className="my-1 w-full">
                                        <option>Mentor with no group</option>
                                        <option>View All</option>
                                    </select>
                                    <input type="search" placeholder="search" />
                                    <ul className="overflow-auto" style={{ maxHeight: "130px" }}>
                                        {
                                            Mentors && Mentors.map((data, index) =>
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
                                        <option>Student with no group</option>
                                        <option>View All</option>
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
                                <p className="text-center text-2xl text-gray-700">Selected Students</p>
                                <div className="bg-green-200 p-4 flex overflow-auto" style={{ flexFlow: "wrap", maxHeight: "190px" }}>
                                    {
                                        studentLists && studentLists.map((data, index) => (
                                            <p className="bg-gray-200 p-2 rounded mx-1" key={index} style={{ width: "fit-content" }}>{data.first_name}</p>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="w-full my-2">
                                <p className="text-center text-2xl text-gray-700">Selected Mentor</p>
                                <p className="px-2 text-center text-2xl">{selectedMentor && (selectedMentor.first_name + ' ' + selectedMentor.last_name)}</p>
                            </div>

                            <div className="flex justify-center ">
                                <button className={`py-2 px-4 w-1/2 rounded bg-green-400 hover:bg-green-700 hover:text-white ${(selectedMentor && studentLists.length) ? '' : 'disabled'}`} onClick={() => this.submitForm}>Create Group</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}
