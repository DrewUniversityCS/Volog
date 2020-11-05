import React, { Component } from 'react'
import VProgressBar from '../../elements/ProgressBar';
export default class ProfileOpen extends Component {

    state = {
        Mentors: [],
        Students: []
    }
    componentDidMount() {
        this.fetchMentorsList()
        this.StudentsMentorsList()
    }

    fetchMentorsList = () => {
        const apiData = [
            { name: 'Mahmoud', id: '6587', email: 'mahmoud@gmail.com' },
            { name: 'Deja', id: '23', email: 'deja@gmail.com' },
            { name: 'Perrfection', id: '98', email: 'perrfection@gmail.com' },
            { name: 'David', id: '12', email: 'david@gmail.com' },
        ]
        this.setState({ Mentors: apiData })

    }

    StudentsMentorsList = () => {
        const apiData = [
            { name: 'Mahmoud', id: '6587', email: 'mahmoud@gmail.com' },
            { name: 'Deja', id: '23', email: 'deja@gmail.com' },
            { name: 'Perrfection', id: '98', email: 'perrfection@gmail.com' },
            { name: 'David', id: '12', email: 'david@gmail.com' },
        ]
        this.setState({ Students: apiData })
    }

    AllfetchMentorsList = () => {
        // api call
        // this.setState({ Mentors: apiData })

    }

    AllStudentsMentorsList = () => {
        // api call
        // this.setState({ Mentors: apiData })

    }
    render() {
        const GroupData = this.props.GroupData;
        const { Mentors, Students } = this.state;
        return (
            <div>
                {
                    GroupData ?
                        <>
                            <div>
                                <div className="p-4">
                                    <p className="flex justify-between flex-col sm:flex-row">
                                        <span className="text-4xl font-medium">
                                            {GroupData.groupName}
                                        </span>
                                        <span className="text-2xl my-auto">
                                            {GroupData.first_name + ' '}{GroupData.last_name}
                                        </span>

                                        <span className="my-auto">

                                            <button><img src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-1/512/add-icon.png" className="h-6" alt="add" onClick={() => { }} /></button>
                                            <button className="mx-2"><img src="https://webstockreview.net/images/how-to-edit-png-images-3.png" className="h-6" alt="add" onClick={() => { }} /></button>
                                        </span>
                                    </p>
                                </div>
                                <div className="flex">
                                    <div className="w-1/2 flex bg-green-300 p-2 shadow-md">
                                        <div className="w-1/2 flex flex-col p-2">
                                            <p className="-mb-2 flex justify-center"> <a onClick={() => this.AllfetchMentorsList()}>View All</a></p>
                                            <hr />
                                            <div>
                                                <ul className="overflow-auto" style={{ maxHeight: "60vh" }}>

                                                    {
                                                        Mentors && Mentors.map((data, index) => (
                                                            <li><input type="radio" className="my-1" name="mentorSelect" value={data.id} key={index} />{data.name} </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="w-1/2 flex flex-col p-2">
                                            <p className="-mb-2 flex justify-center"><a onClick={() => this.AllStudentsMentorsList()}>View All</a></p>
                                            <hr />


                                            <div>
                                                <ul className="overflow-auto" style={{ height: "60vh" }}>
                                                    {
                                                        Students && Students.map((data, index) => (
                                                            <li><input className="my-1" type="radio" value={data.id} key={index} />{data.name} </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <VProgressBar completeCount={0} pendingCount={20}></VProgressBar>
                                    </div>
                                </div>
                            </div>
                        </> : <p className="text-2xl text-red-400 p-10">No User Data</p>
                }
            </div>
        )
    }
}
