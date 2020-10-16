import React, {Component} from 'react';
import VProgressBar from "../ProgressBar";
import {
  Card, CardBody,
  CardTitle, Button
} from 'reactstrap';
import {Container} from "@material-ui/core";


class StudentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: 'Perrfection'
        }

    }

    render(){
    return<Container>
      <Card style={{ width: '45rem' }}>
        <CardBody>
          <CardTitle> Perrfection </CardTitle>
          <VProgressBar/>
          <Button>See More</Button>
        </CardBody>
      </Card>
    </Container>
  }
}

export default StudentCard;