import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import {deleteGroup} from "../../../../functions/services/api/group_requests/create_group";


class DeleteGroup extends Component {
    handleConfirm = (id, val) => {
        if (val) {
            console.log('id', id)
            //api call here
            deleteGroup(this, id)
        } else {
            this.props.createDeleteModal(false)
        }
    }

    render() {
        const {show, groupId} = this.props;
        return (
            <>
                <button className={'ml-2'} onClick={() => {
                    this.props.createDeleteModal(true)
                }}><img src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Editing-Delete-icon.png"
                        className="h-6" alt="Delete" onClick={() => {

                }}/></button>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={show} onHide={() => {
                    this.props.createDeleteModal(true)
                }} animation={false}>
                    <div>
                        <div className={'p-4 pd-md-0 bg-grey-800 text-xl text-center font-medium'}>Are You Sure?</div>
                        <div className={'p-4 flex justify-around'}>
                            <button
                                onClick={() => {
                                    this.handleConfirm(groupId, true)
                                }}
                                className={'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'}
                            >Yes
                            </button>

                            <button
                                onClick={() => {
                                    this.handleConfirm(groupId, false)
                                }}
                                className={'bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded '}
                            >No
                            </button>
                        </div>
                    </div>

                </Modal>
            </>
        );
    }
}

export default DeleteGroup;
