import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import "../../../static/css/pages/mentorPg.css"
import HourList from "../../pages/hourList";
import {getHoursList} from "../../../functions/services/api/hours_request/getHoursList";

class StudentCard extends Component {

    state = {
        status: 'PENDING',
        page: 1,
        data: {results: []}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.getHours()
        }
    }

    getHours = () => {
        getHoursList(this, this.state.status, this.props.id, this.state.page, this.props.type === 'mentor' ? 'mentor' : 'student')
    };

    componentDidMount() {
        this.getHours()
    }

    refreshHourData = () => {
        this.getHours()
    };

    pagination = (val) => {
        this.setState({
            page: val
        }, () => {
            this.getHours()
        })
    };

    render() {
        const {first_name, last_name} = this.props.mentor;
        const {page} = this.state;
        const {count} = this.state.data;
        const {user_role} = this.props;

        return <div className="px-2">
            <Card className={"shadow-md my-1"} style={{borderRadius: "7px"}}>
                <Card.Body>
                    <Card.Title> {first_name} {last_name} </Card.Title>
                    <div className={'p-2 flex'}>
                        <button
                            className={"mx-1 px-3 py-2 bg-blue-700 text-white rounded hover:shadow-md"}
                            onClick={() => {
                                this.setState({status: 'PENDING', page: 1}, () => {
                                    this.getHours()
                                })
                            }}
                        >View Pending Hours
                        </button>
                        <button
                            className={"mx-1 px-3 py-2 bg-green-700 text-white rounded hover:shadow-md"}
                            onClick={() => {
                                this.setState({status: 'APPROVED', page: 1}, () => {
                                    this.getHours()
                                })
                            }}
                        >View Approved Hours
                        </button>
                        <button
                            className={"mx-1 px-3 py-2 bg-red-700 text-white rounded hover:shadow-md"}
                            onClick={() => {
                                this.setState({status: 'DECLINED', page: 1}, () => {
                                    this.getHours()
                                })
                            }}
                        >View Declined Hours
                        </button>
                    </div>
                </Card.Body>
            </Card>
            <HourList data={this.state.data.results} status={this.state.status} refreshHourData={this.refreshHourData}
                      pagination={this.pagination} count={count} page={page} user_role={user_role}/>

        </div>
    }
}

export default StudentCard;
