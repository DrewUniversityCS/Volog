import React from "react";

class StudentDashboard extends React.Component {
    render(){
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
              <p>
                <Notification/>
              </p>
            </Jumbotron>
            <GroupCard/>
            </Container>
        </div>
    }
}

export default StudentDashboard;