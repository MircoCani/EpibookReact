import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//data import
import fantasylist from "../../books/fantasy.json";
//components import
import Bookcard from '../Bookcard/Bookcard.component';

export const AllTheBooks = () => {
  return (
    <div>
        <Container>
          <Row>
            {fantasylist.map((book, index) => {
              return <Bookcard title={book.title} image={book.img} />; 
            })}
          </Row>
        </Container>
    </div>
  );
}

export default AllTheBooks;