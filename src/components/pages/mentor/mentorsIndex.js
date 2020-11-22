import React, {Component} from 'react';
import MentorList from './mentorList';
import MentorOpen from './mentorOpen';
import FloatingActionButtons from './notificationButton';
import VProgressBar from "../../display/cards/progressBar";

export default class Mentor extends Component {
    state = {
        mentors: null,
        data:{},

        selectedMentorData: null,
        page: 1,
        countData: 0,
        mentorNo: 0,
        searchQuery: ''
    };

    componentDidMount() {
        this.getMentorData();
    }

    getMentorData = () => {
        const {page, searchQuery} = this.state;

        //api call here
        let com = this;
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let data = JSON.parse(xhttp.responseText);
                com.setState({mentors: data.results, selectedMentorData: data.results[0], countData: data.count, data: data});
            }
        };
        xhttp.open("GET", `/api/group/students/current?page=${page}&search=${searchQuery}`);
        xhttp.send();

    };

    pagination = (page) => {
        this.setState({page: page}, () => {
            this.getMentorData();
        });

    };

    selectedMentor = (index) => {
        const mentor = this.state.mentors[index];
        this.setState({selectedMentorData: mentor, mentorNo: index})
    };

    searchMentor = (event) => {
        let mentorQuery = event.target.value.toLowerCase();
        this.setState({searchQuery: mentorQuery, page: 1}, () => {
            this.getMentorData()
        });
    };

    render() {
        const {mentors, selectedMentorData, page, countData, mentorNo, data} = this.state;
        const {user} = this.props;
        return (
            <>
                <div className="-mb-10 -mt-16 flex justify-between">
                    <p className="m-0 my-auto p-0 text-2xl w-1/2 font-medium">Welcome
                        Back, {user.first_name} {user.last_name}!</p>
                    <div className="mt-12 w-full">
                        <p className="m-3 ml-4 p-0 text-2xl">
                            Group cumulative progress
                        </p>
                        <div className="h-20">
                            {console.log(data)}
                            {data ? <VProgressBar completeCount={data.approved_hours} pendingCount={data.pending_hours}/> : ''}

                        </div>
                    </div>
                </div>
                <div className="flex shadow-md" style={{height: "66.5vh"}}>

                    <div className="relative h-full w-1/2 bg-green-100 ">
                        <MentorList
                            pagination={this.pagination}
                            mentorData={mentors}
                            selectedmentor={this.selectedMentor}
                            page={page}
                            searchmentor={this.searchMentor}
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
