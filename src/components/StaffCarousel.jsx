import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

function StaffCarousel({ staffData }) {
  return (
    <Carousel>
      {staffData.map((staff, index) => (
        <Carousel.Item key={index}>
          <Card>
            <Card.Img variant="top" src={staff.image} />
            <Card.Body>
              <Card.Title>{staff.name}</Card.Title>
              <Card.Text>{staff.position}</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default StaffCarousel;