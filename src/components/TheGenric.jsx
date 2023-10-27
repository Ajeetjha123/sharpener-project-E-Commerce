import React from 'react'
import { Card } from 'react-bootstrap'

const TheGenric = () => {
  const cardStyle = {
    fontWeight: "bold",
    fontSize: '100px',
    backgroundColor: 'rgb(166, 166, 166)',
    color: "white",
  }
  return (
    <div>
       <Card style={cardStyle}>
        <Card.Body className='me-auto mx-auto'>
          <Card.Text>The Generics</Card.Text>
        </Card.Body>
       </Card>
    </div>
  )
}

export default TheGenric