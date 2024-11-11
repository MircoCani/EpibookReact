import React from 'react';
import Container from 'react-bootstrap/Container';

//style imports
import "./Myfooter.style.css";

const Myfooter = () => {
  return (
    <footer bg="primary" data-bs-theme="dark">
        <Container expand="lg" bg="primary" data-bs-theme="dark">
            EpiBook copyright 2024 & something
            
        </Container>
    </footer>
  )
}

export default Myfooter