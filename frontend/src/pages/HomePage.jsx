import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { Card, Badge, Button } from 'react-bootstrap';
const HomePage = () => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title className="mb-0">Card Title</Card.Title>
              <Card.Text className="mb-2 text-muted">Playstation</Card.Text>
            </div>
            <p><BsThreeDotsVertical /></p>
          </div>
          <div className="d-flex justify-content-between">
            
              <Badge pill bg="success">
                RPG
            </Badge>
             <Card.Text>
          2016
        </Card.Text>
          </div>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
          <Button variant="primary">Edit</Button>
          <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default HomePage