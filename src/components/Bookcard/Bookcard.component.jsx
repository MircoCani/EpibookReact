import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//style
import '../Bookcard/bookcard.style.css';


const Bookcard = (props) => {
    const { title, image } = props; 
    return (
      <Col>
        <Card className= "bookCard">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
  

export default Bookcard