import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import logo from '../assets/img/logo.png';

export const NavBar = () => {
  const [activeLink, setActiveLink]= useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect( () => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            seScrolled(true);           
        } else {
            seScrolled(false)
        }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src = {logo} alt="Logo"/> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
         <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#profile" className={activeLink === 'profile' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('profile')}>Home</Nav.Link>
            <Nav.Link href="#profile" className= {activeLink === 'profile' ? 'active navbar-link' : 'navbar-link'}  onClick= {()=> onUpdateActiveLink('profile')}>Profile</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className= {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick= {()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            
          <button
            className="vvd"
            onClick={() => window.open('https://fi.linkedin.com/in/basant-khattab-193b16256', '_blank')}
          >
          <span>Let's Connect</span>
          </button>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

    