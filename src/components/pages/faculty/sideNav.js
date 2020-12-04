import React, {Component} from 'react'

export default class SideNav extends Component {
    render() {
        const {page} = this.props;
        return (
            <div className="bg-white" style={{height: '90vh'}}>
                <div className="flex flex-col mt-10 text-center w-24">
                    <a className={`bg-white capitalize p-2 text-black  ${page === 0 && "bg-green-700"}`}
                       onClick={() => {
                           this.props.openPage(0)
                       }}>Students</a>
                    <a className={`bg-white capitalize p-2  mt-12 text-black  ${page === 1 && "bg-green-700"}`}
                       onClick={() => {
                           this.props.openPage(1)
                       }}>Mentors</a>
                    <a className={`bg-white capitalize p-2  mt-12 text-black  ${page === 2 && "bg-green-700"}`}
                       onClick={() => {
                           this.props.openPage(2)
                       }}>Groups</a>
                    <a className={`bg-white capitalize p-2  mt-12 text-black  ${page === 3 && "bg-green-700"}`}
                       onClick={() => {
                           this.props.openPage(3)
                       }}>Stats</a>
                    <a className={`bg-white capitalize p-2  mt-12 text-black  ${page === 4 && "bg-green-700"}`}
                       onClick={() => {
                           this.props.openPage(4)
                       }}>Referrals</a>

                </div>
            </div>
        )
    }
}
