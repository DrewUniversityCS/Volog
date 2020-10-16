import React, {Component} from 'react';

class PopupModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
}

export default PopupModal;