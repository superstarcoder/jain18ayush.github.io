import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

function StaffCarousel({ staffData }) {
  const itemsPerSlide = Math.min(Math.max(Math.floor(window.innerWidth / 300), 1), 4); // Optimal number of cards per slide based on screen width, with a max of 4

  return (
    <Carousel>
      {Array.from({ length: Math.ceil(staffData.length / itemsPerSlide) }).map((_, slideIndex) => (
        <Carousel.Item key={slideIndex}>
          <div className="staff-card-container" style={{ display: 'flex', justifyContent: 'space-between', zIndex: 1 }}> {/* Flexbox for horizontal stacking */}
            {staffData.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((staff, index) => (
              <Card className="staff-card" key={index} style={{ flex: '1', margin: '0 10px', zIndex: 1 }}> {/* Flex item with margin */}
                <Card.Img variant="top" src={staff.image} />
                <Card.Body class="first-card">
                  <Card.Title className="name">{staff.name}</Card.Title>
                  <Card.Text className="position">{staff.position}</Card.Text>
                </Card.Body>
                <div class="back-card"></div>
                <div class="thid-card"></div>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default StaffCarousel;