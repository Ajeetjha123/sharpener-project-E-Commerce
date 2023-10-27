import React from 'react'
import { Card, Nav } from 'react-bootstrap'

const Footer = () => {
  const cardStyle = {
    fontWeight: "bold",
    fontSize: '40px',
    backgroundColor: 'DeepSkyBlue',
    color: "white",
  }
  return (
       <Card style={cardStyle}>
          <Card.Body className='d-flex justify-content-around'>
            <Card.Text>The Generics</Card.Text>
            <Nav.Link href='https://www.youtube.com/'>
            <Card.Img style={{height: 30, width: 30}} src='https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg' />
            </Nav.Link>
            <Nav.Link href='https://open.spotify.com/'>
            <Card.Img style={{height: 30, width: 30}} src='https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png' />
            </Nav.Link>
            <Nav.Link href='https://www.facebook.com/'>
            <Card.Img style={{height: 30, width: 30}} src='https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png' />
            </Nav.Link>
          </Card.Body>
       </Card>
  )
}

export default Footer