import React, {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class GroupCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Mentor: 'Deja',
            StuNames: ['Perrfection', 'Mahmoud', 'David']
        }

    }

    render(){
    return<div>
      <Card style={{ width: '18rem' }}>
        <CardBody>
          <CardTitle>Mentor: Deja </CardTitle>
          <CardSubtitle>Students:  </CardSubtitle>
          <CardText>
            Perrfection
            Mahmoud
            David
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  }
}

export default GroupCard;