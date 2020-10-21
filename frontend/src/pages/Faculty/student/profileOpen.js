import React, { Component } from 'react'

export default class ProfileOpen extends Component {

    render() {
        const student = this.props.data;
        return (
            <div>
                {
                    student ?
                        <>
                            <h1 className="p-6 text-3xl text-center">Student View</h1>
                            <div className="flex flex-col md:flex-row justify-between pt-20 px-6 md:pt-12 pr-24">
                                <div className="flex flex-col justify-center text-center text-2xl w-1/2">
                                    <img src="https://cdn2.iconfinder.com/data/icons/rcons-users-color/32/waiter-512.png" className="rounded-ful h-20 w-20 mx-auto" alt="studentImg" />
                                    <p className="capitalize font-medium text-green-900">{student.first_name + ' ' + student.last_name}</p>
                                    <p className="font-medium text-green-900">{student.email}</p>
                                </div>
                                <div className="flex flex-col">
                                    <input type="button" value="view hours" className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded mb-2 capitalize" />
                                    <input type="button" value="edit hours" className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded mb-2 capitalize" />
                                    <input type="button" value="delete hours" className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded mb-2 capitalize" />
                                    <input type="button" value="button1" className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded mb-2 capitalize" />
                                    <input type="button" value="button2" className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded mb-2 capitalize" />
                                </div>
                            </div>
                        </> :
                        <p className="text-2xl text-red-400 p-10">No User Data</p>
                }
            </div>
        )
    }
}
