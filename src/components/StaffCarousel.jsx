import React from 'react';
import { Carousel, Card, Badge } from 'react-bootstrap';
import imagePath from '../assets/RachaelWei.jpg';

function StaffCarousel({ staffData }) {
  const itemsPerSlide = Math.min(Math.max(Math.floor(window.innerWidth / 300), 1), 4); // Optimal number of cards per slide based on screen width, with a max of 4

  return (
    <Carousel>
      {Array.from({ length: Math.ceil(staffData.length / itemsPerSlide) }).map((_, slideIndex) => (
        <Carousel.Item key={slideIndex}>
          <div className="staff-card-container" style={{ display: 'flex', justifyContent: 'space-between', zIndex: 1 }}> {/* Flexbox for horizontal stacking */}
            {staffData.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((staff, index) => (
              <Card className="staff-card" key={index} style={{ flex: '1', margin: '0 10px', zIndex: 1 }}> {/* Flex item with margin */}
                <Card.Img variant="top" src={imagePath} className="picture" />
                <Card.Body className='content'>
                  <Card.Title className="name">{staff.name}</Card.Title>
                  <Card.Text className="bio">{staff.bio}</Card.Text>

                  {/* Render technical areas if available */}
                  {staff.split_technical_areas && staff.split_technical_areas.length > 0 && (
                    <div className="chip-list">
                      {staff.split_technical_areas.map((area, i) => (
                        <Badge key={i} className="chips-ta" pill bg="secondary" style={{ margin: '2px' }}>
                          {area}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {staff.split_languages && staff.split_languages.length > 0 && (
                    <div className="chip-list">
                      {staff.split_languages.map((language, i) => (
                        <Badge key={i} className="chips-lang" pill bg="info" style={{ margin: '2px' }}>
                          {language}
                        </Badge>
                      ))}
                    </div>
                  )}
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
