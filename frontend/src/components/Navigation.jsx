import { React, useState } from 'react'
import { Container, Navbar, Nav, Button, Modal, Form } from 'react-bootstrap'
import logo from '../assets/logo.png'
import AddModal from './AddModal.jsx'
import { FiPlus } from "react-icons/fi";

const Navigation = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> <img src={logo} alt="" height={50} /> </Navbar.Brand>
            <Nav>
                      <Nav.Link href='/' className='text-white'>Home</Nav.Link>
                      <Button className='d-flex align-items-center justify-content-center rounded-pill px-4' variant='success' onClick={handleShow}><FiPlus className='me-1' /> Add Game</Button>
            </Nav>
        </Container>  
      </Navbar>
        <AddModal show={show} handleClose={handleClose}/>
    </>
  )
}

export default Navigation