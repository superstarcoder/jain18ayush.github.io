import React from 'react';
import { Card } from 'react-bootstrap';

function HallOfFame({ hofData }) {
  return (
    <div className="hall-of-fame">
      {hofData.map((group, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{group.group}</Card.Title>
            <Card.Text>{group.description}</Card.Text>
            <Card.Link href={group.github} target="_blank">GitHub</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default HallOfFame;