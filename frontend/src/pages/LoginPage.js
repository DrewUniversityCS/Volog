import React from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

class LoginPage extends React.Component {
    render(){
        return<div>
            <Row className="justify-content-md-center">
            <Card className="text-center p-3" style={{ width: '30rem' }}>
              <Card.Img variant="top" src="../../../static/assets/volog_logo/green_on_gray.png" />
              <Card.Body>
                <div></div>
                <Button size="lg" active variant="primary">Login</Button>
                <Card.Text>
                    <small className="text-muted">
                        New to Volog? <Button active variant="secondary" href="#">SignUp!</Button>
                    </small>
                </Card.Text>
              </Card.Body>
            </Card>
            </Row>
        </div>
    }
}

export default LoginPage;