import React, {Component} from 'react'
import MentorList from './mentorList'
import MentorOpen from './mentorOpen'
import FloatingActionButtons from './notificationButton'

import VProgressBar from '../../components/elements/ProgressBar'
export default class Mentor extends Component {
    state = {
        mentors: null,
        selectedMentorData: null,
        page: 1,
        countData: 0,
        mentorNo: 0,
        searchQuery: ''
    };

    componentDidMount() {
        this.getmentorData();
    }

    getmentorData = () => {
        const {page, searchQuery} = this.state;
        const data = {
            results: [
                {
                    id: 1,
                    name: 'Mahmoud'
                }, {
                    id: 2,
                    name: 'moda'
                }, {
                    id: 3,
                    name: 'uda'
                },
            ],
            count: 3,
        }

        this.setState({mentors: data.results, selectedMentorData: data.results[0], countData: data.count});
        // //api call here
        // let com = this;
        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //         let data = JSON.parse(xhttp.responseText);
        //         com.setState({ mentors: data.results, selectedMentorData: data.results[0], countData: data.count });
        //     }
        // };
        // xhttp.open("GET", `/superAdmin/users-details/?page=${page}&role=mentor&search=${searchQuery}`);
        // xhttp.send();

    };

    pagination = (pageno) => {
        this.setState({page: pageno}, () => {
            this.getmentorData();
        });

    };

    selectedmentor = (index) => {
        const mentor = this.state.mentors[index];
        this.setState({selectedMentorData: mentor, mentorNo: index})
    };

    searchmentor = (event) => {
        let mentorQuery = event.target.value.toLowerCase();
        this.setState({searchQuery: mentorQuery, page: 1}, () => {
            this.getmentorData()
        });

    };

    render() {
        const {mentors, selectedMentorData, page, countData, mentorNo} = this.state;
        return (
            <>
                 <div className="-mb-10 -mt-16 flex justify-between">
                    <p className="m-0 my-auto p-0 text-3xl w-1/2">Welcome Back Mentor,</p>
                    <div className="mt-10 w-full">
                        <p className="m-3 ml-4 p-0 text-2xl">
                            Group cumulative progress
                        </p>
                        <VProgressBar className="VProgressBar"/>
                    </div>
                </div>
            <div className="flex shadow-md" style={{height: "66.5vh"}}>

                <div className="relative h-full w-1/2 bg-green-100 ">
                    <MentorList
                        pagination={this.pagination}
                        mentorData={mentors}
                        selectedmentor={this.selectedmentor}
                        page={page}
                        searchmentor={this.searchmentor}
                        countData={countData}
                        mentorNo={mentorNo}
                    />
                </div>
                <MentorOpen data={selectedMentorData}/>
                <FloatingActionButtons/>
            </div>
                </>

        )
    }
}