import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

function StaffCarousel({ staffData }) {
  const itemsPerSlide = Math.min(Math.max(Math.floor(window.innerWidth / 300), 1), 4); // Optimal number of cards per slide based on screen width, with a max of 4

  // Extend the data array to allow looping by repeating items
  const extendedStaffData = staffData.length % itemsPerSlide === 0
    ? staffData
    : [...staffData, ...staffData.slice(0, itemsPerSlide - (staffData.length % itemsPerSlide))];

  return (
    <Carousel>
      {Array.from({ length: Math.ceil(extendedStaffData.length / itemsPerSlide) }).map((_, slideIndex) => (
        <Carousel.Item key={slideIndex}>
          <div className="staff-card-container" style={{ display: 'flex', justifyContent: 'space-between', zIndex: 1 }}>
            {extendedStaffData.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((staff, index) => (
              <Card className="staff-card" key={index} style={{ flex: '1', margin: '0 10px', zIndex: 1 }}>
              <div className="image-container">
                <Card.Img variant="top" src={`./images/${staff.picture}.jpg`} className="picture" />
              </div>
                <Card.Body className='content'>
                  <Card.Title className="name">{staff.name}</Card.Title>
                  <Card.Text className="bio">{staff.bio}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default StaffCarousel;
