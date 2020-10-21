import React from "react";
import Image from 'react-bootstrap/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

class UserPic extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Image width={200} padding={0} src="https://www.insidemathematics.org/sites/default/files/2019-10/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" roundedCircle/>
                    </Col>
                </Row>
            </Container>

              )
    }
}
export default UserPic;