import React, {Component} from 'react';
import VProgressBar from "../ProgressBar";
import {
  Card, CardBody,
  CardTitle, Button
} from 'reactstrap';


class StudentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: 'Perrfection'
        }

    }

    render(){
    return<div>
      <Card style={{ width: '45rem' }}>
        <CardBody>
          <CardTitle> Perrfection </CardTitle>
          <VProgressBar/>
          <Button>See More</Button>
        </CardBody>
      </Card>
    </div>
  }
}

export default StudentCard;