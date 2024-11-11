import React from 'react'
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Welcome() {
  return (
    <div>
        <Container>
          <Row>
            <Col>
            <h1>Benvenuti in Epibooks!</h1>
            </Col>
          </Row>
           <Row>
            <Col>
                <>
                  {[
                    
                    'info',
                  ].map((variant) => (
                    <Alert key={variant} variant={variant}>
                      Non ti sei ancora registrato al nostro servizio
                    </Alert>
                  ))}
                </>
            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Welcome
