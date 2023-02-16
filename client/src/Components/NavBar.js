import React from 'react'
import {Navbar,Container,Nav, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { logOut } from '../Redux/AuthSlice'

const NavBar = () => {
  const isAuth = localStorage.getItem('isAuth')
  const dispatch = useDispatch()
  const navigate= useNavigate()
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            {isAuth ? <>
              <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
              <Button onClick={()=> {dispatch(logOut())
                                     navigate('/')
              }} variant='light'>LogOut</Button>

            </> :
            <>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/">Login</Nav.Link>
            </>}
            
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar