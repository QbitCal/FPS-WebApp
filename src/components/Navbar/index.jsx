import React from 'react'
import {
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink} 
    from './NavbarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/crestLogo.png')} alt='logo' height="75" width="75"/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/reports' activeStyle>
            Reports
          </NavLink>
          <NavLink to='/appointments' activeStyle>
            Appointments
          </NavLink>
          <NavLink to='/clients' activeStyle>
            Clients
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/logout'>Logout</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar