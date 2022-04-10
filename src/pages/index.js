import React from 'react'
import "../styles/login.css";

const Login = () => {
  return (
    <div className='div-master' style={{
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
        {/* The login form... */}
        <li>
            <form>
                {/*<label for="username">Username:</label>*/}
                <input type="text" id="username" placeholder= "Username" name="username" />
                <br/>
                {/*<label for="password">Password:</label>*/}
                <input type="password" id="password" placeholder="Password" name="password" /> 
                <br />
            </form>
        </li>
        <li>
            <br />
        </li>
        {/* The submit button... */}
        <li>
            <input className='LogBtn' type="submit" value="Login"></input>
        </li>
        </ul>
    </div>
  )
}

function login (username, password) {
    if (username === "username" && password === "password") {
        
    }
}


export default Login