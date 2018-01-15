import React from "react";
import logo from "./ghibli.png";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Films = props => (
  <div className="container">
    <div className="row">
      
        <Card>
          <CardImg top width="100%" src={logo} alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.director}</CardSubtitle>
            <CardText>{props.description}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      
    </div>
  </div>
);

export default Films;
