import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img
              alt=""
              src={require('../Images/NIN logo 2.jpg')}
              width="200rem"
              height="60rem"
              className="d-sm-inline-block d-none"
            />{' '}
            Nutrition Games
          </Navbar.Brand>
      </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" >
          <Link className="text-decoration-none" to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
                 <Link className="text-decoration-none" to='/FoodHealthHome'><Nav.Link href="#features">Food Health & Nutrition</Nav.Link></Link> 
                 <Link className="text-decoration-none" to='/Carbohydrate'><Nav.Link href="#pricing">Carbohydrate</Nav.Link></Link>
                 <Link className="text-decoration-none" to='/Fat'><Nav.Link href="#pricing">Fat</Nav.Link></Link>  
                 <Link className="text-decoration-none" to='/Protein'><Nav.Link href="#pricing">Protein</Nav.Link></Link> 
                 <Link className="text-decoration-none" to='/Vitamin'><Nav.Link href="#pricing">Vitamin</Nav.Link></Link> 
                 <Link className="text-decoration-none" to='/Minerals'><Nav.Link href="#pricing">Minerals</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

        