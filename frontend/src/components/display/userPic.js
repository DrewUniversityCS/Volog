import React from "react";
import Image from 'react-bootstrap/image';
import Container from 'react-bootstrap/Container';

class UserPic extends React.Component {
    render() {
        const imgSrc = this.props.imgSrc
        return (
            <Container>
                <Image width={300}
                       src={imgSrc ? imgSrc : "http://winkeyecare.com/wp-content/uploads/2013/03/Empty-Profile-Picture-450x450.jpg"}
                       roundedCircle/>
            </Container>
        )
    }
}

export default UserPic;