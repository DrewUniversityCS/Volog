import React from "react";
import Image from 'react-bootstrap/image';
import Container from 'react-bootstrap/Container';

class UserPic extends React.Component {
    render() {
        return (
            <Container>
                <Image width={275} padding={0}
                       src="http://winkeyecare.com/wp-content/uploads/2013/03/Empty-Profile-Picture-450x450.jpg"
                       roundedCircle/>
            </Container>
        )
    }
}

export default UserPic;