import React from 'react'
import '../styles/default.css';
import { NavLink } from '../components/Navbar/NavbarElements';
import '../styles/home.css'

const Home = () => {
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
        <h1>Home</h1>
        <br />
        <p>
          This is the Fleur De Lis Pet Spa home page. Once all functionality is added, we will have the logo followed by buttons bringing the user to the next pages.
        </p>
      </div>
      <br />
      <div className='button-bar'>
          <NavLink to='/reports' activeStyle>
            Reports
          </NavLink>
          <NavLink to='/appointments' activeStyle>
            Appointments
          </NavLink>
          <NavLink to='/clients' activeStyle>
            Clients
          </NavLink>
        </div>
    </div>
  </div>
    
  )
}

export default Home