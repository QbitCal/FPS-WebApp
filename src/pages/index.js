import React from 'react'

const Home = () => {
  return (
    <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}
    >
        <ul>
        {/* The logo... */}
        <li>
            <img src={require('../images/fullLogo.png')} 
                alt='logo' height="500" width="500"/>
        </li>
        <br/>
        {/* The login form... */}
        <li>
            <form>
                <label for="username">Username:</label>
                <br/>
                <input type="text" id="fname" name="fname" />
                <br/>
                <label for="password">Password:</label>
                <br/>
                <input type="text" id="lname" name="lname" /> 
            </form>
        </li>
        {/* The submit button... */}
        <li>
            <input type="submit" value="Login"></input>
        </li>
        </ul>
    </div>
  )
}

export default Home