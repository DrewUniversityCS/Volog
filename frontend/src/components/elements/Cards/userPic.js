import React from "react";
import Image from 'react-bootstrap/image';
import Container from 'react-bootstrap/Container';

class UserPic extends React.Component {
    render() {
        const imgSrc = this.props.imgSrc
        return (
            <Container>
                <Image width={275} padding={0}
                       src={imgSrc ? imgSrc : "https://www.insidemathematics.org/sites/default/files/2019-10/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"}
                       roundedCircle/>
            </Container>
        )
    }
}

export default UserPic;