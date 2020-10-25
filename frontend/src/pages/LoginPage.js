import React from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from "@material-ui/core/Container";

class LoginPage extends React.Component {
    render() {
        return <Container>
            <Row className="justify-content-md-center">
                <Card className="text-center p-3" style={{width: '30rem'}}>
                    <Card.Img variant="top" src="../../../static/assets/volog_logo/green_on_gray.png"/>
                    <Card.Body>
                        <Button size="lg" active variant="primary">Login</Button>
                        <Card.Text>
                            <small className="text-muted">
                                New to Volog? <Button active variant="secondary" href="#">SignUp!</Button>
                            </small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    }
}

export default LoginPage;