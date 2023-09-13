import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
      
          <h3>Copyright © {year} CN</h3>

        
      </Row>
    </Container>
  )
}
export default Footer