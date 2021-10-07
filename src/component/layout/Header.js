import React from 'react'
import { Navbar, Container} from 'react-bootstrap'
import {FiMenu} from "react-icons/fi"
import logo from '../../image/Group 417.svg'

const Header = ({showNav}) => {
    return (
        <>
         <Navbar className="nav-hamburger" bg="white">
         <Container>
          <Navbar.Brand href="#Home">
          <img src={logo} width="110"  height="40" class="logo" alt="Cvquity" />
          </Navbar.Brand>
          <div> <FiMenu className="iconss hamburger" onClick={showNav}/></div>
                </Container>
            </Navbar>
          </>

       
    )
}

export default Header;
