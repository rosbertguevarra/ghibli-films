import React from "react";
import logo from "./ghibli.png";
import "./Grid.css"
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';


const Films = props => (
  
      <Card>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <Badge color="dark"><span>Producer: {props.producer}</span></Badge>
          <Badge color="primary"><span>Release Date: {props.release_date}</span></Badge>
          <Badge color="success"><span>Score: {props.rt_score}</span></Badge>
          <CardSubtitle>Director: {props.director}</CardSubtitle>
          <CardText>{props.description}</CardText>
        </CardBody>
      </Card>
    
);

export default Films;
