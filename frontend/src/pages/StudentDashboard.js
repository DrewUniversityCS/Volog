import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import ModalForm from ;




class StudentDashboard extends React.Component {
    render(){
        const [modalShow, setModalShow] = React.useState(false);
        return <div>
            <Container className="justify-content-lg-center">
            <Jumbotron>
              <h1>Welcome Back Student!</h1>
              <p>
                  Your Cumulative progress
                  <Container>
                      <VProgressBar/>
                  </Container>
              </p>
               <Button active variant="secondary" href="#">Report Hours</Button>


            </Jumbotron>

            </Container>
        </div>
    }
}

export default StudentDashboard;