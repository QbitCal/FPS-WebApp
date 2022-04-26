import React from 'react'
import '../styles/default.css';
import { NavLink } from '../components/Navbar/NavbarElements';
import '../styles/home.css'

const Logout = () => {
  return (
    <div className='div-master' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}
    >
    <div home-wrapper>
      <div className='pageContent'>
        <h1>You have been successfully logged out.</h1>
        <br />
        <h4 style= {{
              paddingLeft: '10%',
              paddingRight: '10%'
          }}>
          If you would like to log back in, return to the login page by clicking below.
        </h4>
          <br />
          <div style= {{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
          }}>
          <NavLink to='/' activeStyle> Return</NavLink>
          </div>
        </div>
    </div>
  </div>
    
  )
}

export default Logout