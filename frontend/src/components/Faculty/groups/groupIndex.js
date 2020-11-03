import React, { Component } from 'react'
import GroupList from './groupList'
import ProfileOpen from './profileOpen'


export default class GroupsDashboard extends Component {
    state = {
        Groups: null,
        selectedGroupData: null,
        page: 1,
        countData: 0,
        GroupNo: 0,
        searchQuery: ''
    };

    componentDidMount() {
        this.getGroupData();
    }


    getGroupData = () => {
        const { page, searchQuery } = this.state;

        //api call here
        // let com = this;
        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //         let data = JSON.parse(xhttp.responseText);
        //         com.setState({ Groups: data.results, selectedGroupData: data.results[0], countData: data.count });
        //     }
        // };
        // xhttp.open("GET", `/superAdmin/users-details/?page=${page}&role=mentor&search=${searchQuery}`);
        // xhttp.send();
        const data = { "count": 1, "next": null, "previous": null, "results": [{ "groupName": "groupnamedynamic", "first_name": "Joe", "last_name": "Adam", "email": "malminawi7@gmail.com", "role": 1, "is_profile_complete": true, "groups": [] }] }
        this.setState({ Groups: data.results, selectedGroupData: data.results[0], countData: data.count });
    };


    pagination = (pageno) => {
        console.log(pageno)
        this.setState({ page: pageno }, () => {
            this.getGroupData();
        });

    };

    selectedGroup = (index) => {
        const Group = this.state.Groups[index];
        this.setState({ selectedGroupData: Group, GroupNo: index })
    };

    searchGroup = (event) => {
        let GroupQuery = event.target.value.toLowerCase();
        this.setState({ searchQuery: GroupQuery, page: 1 }, () => {
            this.getGroupData()
        });

    };
    render() {
        const { Groups, selectedGroupData, page, countData, GroupNo } = this.state;

        return (
            <>
                {
                    Groups &&
                    <>
                        <div className="bg-green-100 w-1/2 p-3" id="leftSide" style={{ height: '90vh' }}>
                            <GroupList
                                pagination={this.pagination}
                                GroupsData={Groups}
                                selectedGroup={this.selectedGroup}
                                page={page}
                                searchGroups={this.searchGroups}
                                countData={countData}
                                GroupNo={GroupNo}
                            />
                        </div>
                        <div className="bg-green-200  w-full" id="rightSide" style={{ height: '90vh' }}>
                            <ProfileOpen GroupData={selectedGroupData} />
                        </div>
                    </>
                }

            </>
        )
    }
}
