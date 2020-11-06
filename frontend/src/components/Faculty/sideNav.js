import React, { Component } from 'react'

export default class SideNav extends Component {
    render() {
        const { page } = this.props;
        return (
            <div className="bg-green-700" style={{ height: '90vh' }}>
                <div className="flex flex-col mt-10 text-center w-24">
                    <a className={`bg-green-700 capitalize p-2 text-white  ${page === 0 && "bg-green-900"}`}
                        onClick={() => {
                            this.props.openPage(0)
                        }}>Students</a>
                    <a className={`bg-green-700 capitalize p-2  mt-12 text-white  ${page === 1 && "bg-green-900"}`}
                        onClick={() => {
                            this.props.openPage(1)
                        }}>Mentors</a>
                    <a className={`bg-green-700 capitalize p-2  mt-12 text-white  ${page === 2 && "bg-green-900"}`}
                        onClick={() => {
                            this.props.openPage(2)
                        }}>Groups</a>
                    <a className={`bg-green-700 capitalize p-2  mt-12 text-white  ${page === 3 && "bg-green-900"}`}
                       onClick={() => {
                           this.props.openPage(3)
                       }}>Stats</a>
                    <a className={`bg-green-700 capitalize p-2  mt-12 text-white  ${page === 4 && "bg-green-900"}`}
                        onClick={() => {
                            this.props.openPage(4)
                        }}>Referrals</a>

                </div>
            </div>
        )
    }
}