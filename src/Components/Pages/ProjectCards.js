import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ProjectCards(props) {
  return (
    <Card style={{padding: 10}}>
      <Card.Img variant="top" src={props.image} width='100' height='180' />
      <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
      {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
      <Button variant="primary" href={props.deployedLink}>Deployed Site</Button>
      <Button variant="primary" href={props.githubLink}>Github Repo</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;