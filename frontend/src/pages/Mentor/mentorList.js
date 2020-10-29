import React, { Component } from 'react'

export default class MentorList extends Component {


    render() {
        const { mentorData: mentor, countData, page } = this.props;
        const maxCount = Math.ceil(countData / 10);
        return (
            <div>
                <div>
                    <div className="flex justify-center p-3 w-full" >
                        <input type="search" placeholder="search" className="border-2 border-green-400 p-1 w-1/2 w-10/12" />
                    </div>
                    <div>
                        {
                            (mentor && mentor.length) ?
                                <ul>
                                    {
                                        mentor.map((data, index) => {
                                            return <li key={index} className={`flex justify-between px-6 py-2 hover:bg-green-200 ${index === this.props.mentorNo && 'bg-green-300 hover:bg-green-300'}`} onClick={() => { this.props.selectedmentor(index) }}><span>{data.name}</span><span>{data.id}</span></li>
                                        })
                                    }
                                </ul> : "Users not found"
                        }
                    </div>
                </div>
                <div className="absolute w-full  border-gray-200 border-t bottom-0 flex justify-center justify-between px-4 py-3 sm:px-6">
                    <div className="flex-1 flex justify-center ">
                        <a href="#"
                            onClick={() => { this.props.pagination(parseInt(page > 1 ? page - 1 : 1)) }}
                            className="relative inline-flex items-center px-4 py-2  border border-green-400 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                            Previous
                            </a>
                        <span className="h-10 leading-10 text-center w-10">1</span>
                        <a href="#"
                            onClick={() => { this.props.pagination(parseInt(page >= 1 && page < maxCount ? page + 1 : 1)) }}
                            className="ml-3 relative inline-flex items-center px-4 py-2 border border-green-400 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                            Next
                            </a>
                    </div>

                </div>
            </div>
        )
    }
}
