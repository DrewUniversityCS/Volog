import React, {Component} from 'react'
import GroupList from './groupList'
import ProfileOpen from './profileOpen'
import {getGroupList} from "../../../../functions/services/api/group_requests/groupList";


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

    refreshGroupData = () => {
        this.getGroupData();

    }


    getGroupData = () => {
        const {page, searchQuery} = this.state;
        getGroupList(this, searchQuery, page);
    };


    pagination = (page) => {
        this.setState({page: page}, () => {
            this.getGroupData();
        });

    };

    selectedGroup = (index) => {
        const Group = this.state.Groups[index];
        this.setState({selectedGroupData: Group, GroupNo: index})
    };

    searchGroup = (event) => {
        let GroupQuery = event.target.value.toLowerCase();
        this.setState({searchQuery: GroupQuery, page: 1}, () => {
            this.getGroupData()
        });

    };

    render() {
        const {Groups, selectedGroupData, page, countData, GroupNo} = this.state;
        return (
            <>
                {
                    Groups &&
                    <>
                        <div className="bg-green-100 w-1/2 p-3" id="leftSide" style={{height: '90vh'}}>
                            <GroupList
                                pagination={this.pagination}
                                GroupsData={Groups}
                                selectedGroup={this.selectedGroup}
                                page={page}
                                searchGroup={this.searchGroup}
                                countData={countData}
                                GroupNo={GroupNo}
                                refreshGroupData={this.refreshGroupData}
                            />
                        </div>
                        <div className="bg-green-200  w-full" id="rightSide" style={{height: '90vh'}}>
                            {selectedGroupData &&
                            <ProfileOpen
                                GroupData={selectedGroupData}
                                refreshGroupData={this.refreshGroupData}
                            />}
                        </div>
                    </>
                }

            </>
        )
    }
}
