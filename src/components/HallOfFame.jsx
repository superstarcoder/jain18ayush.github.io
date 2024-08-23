import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";


function HallOfFame({ hofData }) {
  return (
    <div className="hall-of-fame">
      {hofData.map((group, index) => (
        <Card key={index} className="mb-3" bg={'black'} border={'white'} text={'white'}>
          <Card.Body>
            <Card.Title>{group.group}</Card.Title>
            <Card.Text>{group.description}</Card.Text>
            <Button href={group.github} variant="primary">
              Demo
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default HallOfFame;
